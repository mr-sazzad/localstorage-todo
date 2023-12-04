"use client";
import Loading from "@/app/loading";
import React, { useState } from "react";
import Select from "react-select";
import Pagination from "@/components/pagination/pagination";
import { useGetAllPostsQuery } from "@/redux/api/posts/postApi";
import PostCard from "@/components/post/PostCard";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { likePost, savePost } from "@/redux/api/posts/postsSlice";

export interface OptionType {
  value: string | number;
  label: string;
}

const Page = () => {
  // ------------ Redux Slice ------------
  const dispatch = useDispatch();
  const likedPostsIds = useSelector(
    (state: RootState) => state.posts.likedPostsIds
  );
  const savedPostsIds = useSelector(
    (state: RootState) => state.posts.savedPostsIds
  );

  console.log(savedPostsIds, "hillo");

  // ------------ getting Data from Json Placeholder ------------
  const { data: posts, isLoading } = useGetAllPostsQuery(undefined);
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
    dispatch(likePost({ id }));
  };

  const handleSave = (id: string) => {
    dispatch(savePost({ id }));
  };

  // Filter posts based on search query
  const filteredPosts = posts?.filter((photo: any) =>
    photo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const postsLength = filteredPosts?.length;

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
  const currentPosts = filteredPosts?.slice(indexOfFirstItem, indexOfLastItem);

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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {currentPosts?.map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              isLiked={likedPostsIds.includes(post.id)}
              isSaved={savedPostsIds.includes(post.id)}
              onLike={() => handleLike(post.id)}
              onSave={() => handleSave(post.id)}
            />
          ))}
        </Masonry>
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        length={postsLength}
      />
    </div>
  );
};

export default Page;
