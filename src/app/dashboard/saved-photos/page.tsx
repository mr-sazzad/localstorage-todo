"use client";

import { useGetAllPhotosQuery } from "@/redux/api/photos/photosApi";
import React, { useState, useMemo, ChangeEvent } from "react";
import Loading from "@/app/loading";
import PhotoCard from "@/components/photo/PhotoCard";
import Pagination from "@/components/pagination/pagination";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Import RootState type
import { likePhoto, savePhoto } from "@/redux/api/photos/photosSlice";
import { OptionType } from "../posts/page";

const Page = () => {
  const dispatch = useDispatch();
  const likedPhotosIds = useSelector(
    (state: RootState) => state.photos.likedPhotosIds
  );
  const savedPhotosIds = useSelector(
    (state: RootState) => state.photos.savedPhotosIds
  );

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isSuccess } = useGetAllPhotosQuery(undefined);

  useMemo(() => {
    if (isSuccess) {
      const storedPhotoIds: string | null =
        typeof window !== "undefined"
          ? localStorage.getItem("savedPhotosIds")
          : null;

      if (storedPhotoIds) {
        console.log(storedPhotoIds, "savedPhotosIds");
        const filteredPhotos = data?.filter((photo: any) =>
          storedPhotoIds.includes(photo.id)
        );
        setFilteredData(filteredPhotos || []);
      }
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <Loading />;
  }

  const handleLike = (id: string) => {
    dispatch(likePhoto({ id }));
  };

  const handleSave = (id: string) => {
    dispatch(savePhoto({ id }));
  };

  const photosLength = filteredData?.length;

  const options: OptionType[] = [
    { value: 10, label: "⚡ 10 Items" },
    { value: 16, label: "🎉 16 Items" },
    { value: 20, label: "🚀 20 Items" },
    { value: 24, label: "❤️ 24 Items" },
  ];

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSelect = (selectedOption: OptionType | null) => {
    if (selectedOption) {
      const selectedValue =
        typeof selectedOption.value === "string"
          ? parseInt(selectedOption.value, 10)
          : selectedOption.value;
      setItemsPerPage(selectedValue || 20);
    } else {
      setItemsPerPage(20);
    }
  };

  return (
    <div className="border border-gray-400 rounded-md p-5 mb-16">
      <div>
        <div className="flex justify-between mb-5">
          <input
            className="w-[300px] border border-gray-400 outline-none rounded-[4px] px-4 py-[6px] relative"
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
        {filteredData?.map((photo: any) => (
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
