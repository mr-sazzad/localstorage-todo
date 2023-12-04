import Image from "next/image";
import React, { useEffect } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { MdSave } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface PhotoCardProps {
  image: string;
  thumbnail: string;
  title: string;
  id: string;
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onSave: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  image,
  thumbnail,
  title,
  id,
  isLiked,
  isSaved,
  onLike,
  onSave,
}) => {
  const truncatedTitle = title.length > 36 ? `${title.slice(0, 36)}...` : title;

  useEffect(() => {}, [id]);

  return (
    <div className="min-h-[270px] h-auto sm:w-[200px] w-full p-3 bg-gray-100 border border-gray-300 rounded-md relative">
      <div className="flex flex-col gap-2">
        <div className="relative sm:h-[120px] h-[140px] w-full">
          <Image src={thumbnail} alt="image" fill className="rounded-md" />
        </div>
        <div>
          <p className="text-md mb-3 h-[80px]">{truncatedTitle}</p>

          <div className="flex flex-row w-full border border-gray-300 rounded-md">
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
    </div>
  );
};

export default PhotoCard;
