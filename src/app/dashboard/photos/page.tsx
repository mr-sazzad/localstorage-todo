"use client";
import Loading from "@/app/loading";
import PhotoCard from "@/components/photo/PhotoCard";
import { useGetAllPhotosQuery } from "@/redux/api/photos/photosApi";
import React, { useState } from "react";
import Select from "react-select";
import Pagination from "@/components/pagination/pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { likePhoto, savePhoto } from "@/redux/api/photos/photosSlice";

export interface OptionType {
  value: string | number;
  label: string;
}

const Page = () => {
  const dispatch = useDispatch();
  const likedPhotosIds = useSelector(
    (state: RootState) => state.photos.likedPhotosIds
  );
  const savedPhotosIds = useSelector(
    (state: RootState) => state.photos.savedPhotosIds
  );
  const { data: photos, isLoading } = useGetAllPhotosQuery(undefined);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const options: OptionType[] = [
    { value: 10, label: "⚡ 10 Items" },
    { value: 16, label: "🎉 16 Items" },
    { value: 20, label: "🚀 20 Items" },
    { value: 24, label: "❤️ 24 Items" },
  ];

  if (isLoading) {
    return <Loading />;
  }

  const handleLike = (id: string) => {
    dispatch(likePhoto({ id }));
  };

  const handleSave = (id: string) => {
    dispatch(savePhoto({ id }));
  };

  // Filter photos based on search query
  const filteredPhotos = photos?.filter((photo: any) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const photosLength = filteredPhotos?.length;

  const handleSelect = (selectedOption: any) => {
    if (selectedOption) {
      const selectedValue =
        typeof selectedOption.value === "string"
          ? parseInt(selectedOption.value)
          : selectedOption.value;
      setItemsPerPage(selectedValue);
    } else {
      setItemsPerPage(20);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = filteredPhotos?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="border border-gray-400 rounded-md p-5 mb-16">
      <div>
        <div className="flex justify-between mb-5">
          <input
            className="sm:w-[300px] w-[150px] border border-gray-400 outline-none rounded-[4px] px-4 py-[6px] relative"
            placeholder="Search What You Love ..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

          <div className="w-[200px]">
            <Select
              defaultValue={options.find(
                (option) => option.value === itemsPerPage
              )}
              onChange={handleSelect}
              options={options}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {currentPhotos?.map((photo: any) => (
          <PhotoCard
            key={photo.id}
            image={photo.url}
            thumbnail={photo.thumbnailUrl}
            title={photo.title}
            id={photo.id}
            isLiked={likedPhotosIds.includes(photo.id)}
            isSaved={savedPhotosIds.includes(photo.id)}
            onLike={() => handleLike(photo.id)}
            onSave={() => handleSave(photo.id)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        length={photosLength}
      />
    </div>
  );
};

export default Page;
