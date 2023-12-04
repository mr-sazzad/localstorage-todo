"use client";

import React, { useState, useMemo, ChangeEvent } from "react";
import Loading from "@/app/loading";
import Pagination from "@/components/pagination/pagination";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { OptionType } from "../posts/page";
import { useGetAllPostsQuery } from "@/redux/api/posts/postApi";
import { likePost, savePost } from "@/redux/api/posts/postsSlice";
import PostCard from "@/components/post/PostCard";
import Masonry from "react-masonry-css";
import { breakpointColumnsObj } from "@/constants";

const Page = () => {
  const dispatch = useDispatch();
  const likedPostsIds = useSelector(
    (state: RootState) => state.posts.likedPostsIds
  );
  const savedPostsIds = useSelector(
    (state: RootState) => state.posts.savedPostsIds
  );

  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isSuccess } = useGetAllPostsQuery(undefined);

  useMemo(async () => {
    if (isSuccess) {
      const storedPostsIds: string | null =
        typeof window !== "undefined"
          ? localStorage.getItem("savedPostsIds")
          : null;

      if (storedPostsIds) {
        const filteredPosts = await data?.filter((post: any) =>
          storedPostsIds.includes(post.id)
        );
        console.log(storedPostsIds, "storedPostsIds 🚀");
        setFilteredData(filteredPosts || []);
      }
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <Loading />;
  }

  const handleLike = (id: string) => {
    dispatch(likePost({ id }));
  };

  const handleSave = (id: string) => {
    dispatch(savePost({ id }));
  };

  const postsLength = savedPostsIds?.length;

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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredData?.map((post: any) => (
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
