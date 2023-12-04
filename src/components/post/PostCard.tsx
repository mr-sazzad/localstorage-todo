import React, { useState, useEffect } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { MdSave } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

const PostCard = ({
  title,
  body,
  id,
  isLiked,
  isSaved,
  onLike,
  onSave,
}: {
  title: string;
  body: string;
  id: string;
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onSave: () => void;
}) => {
  // Load initial liked and saved items from localStorage
  useEffect(() => {}, [id]);

  return (
    <div className="p-4 border border-gray-400 bg-gray-100 rounded-md">
      <div className="flex flex-col gap-2">
        <div>
          <h4 className="font-semibold text-xl">{title}</h4>
        </div>
        <div>
          <p className="text-sm text-gray-500">{body}</p>
        </div>

        <div className="flex flex-row w-full border border-gray-300 rounded-md mt-2">
          <button
            className="px-2 py-2 w-full border-r border-gray-300 flex justify-center items-center"
            onClick={onLike}
          >
            {isLiked ? (
              <BiSolidLike className="text-orange-600 p-2 rounded-full bg-orange-200 text-3xl" />
            ) : (
              <BiLike className="text-orange-600 p-2 rounded-full bg-orange-200 text-3xl" />
            )}
          </button>
          <button
            className="px-2 py-2 w-full flex justify-center items-center"
            onClick={onSave}
          >
            {isSaved ? (
              <BsFillCheckCircleFill className="text-green-600 p-2 rounded-full bg-green-200 text-3xl" />
            ) : (
              <MdSave className="text-green-600 p-2 rounded-full bg-green-200 text-3xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
