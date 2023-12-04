"use client";

const root = "/dashboard";

import { usePathname } from "next/navigation";

import { LuScrollText } from "react-icons/lu";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { MdOutlineSaveAlt } from "react-icons/md";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = [
    {
      id: 1,
      label: "Posts",
      icon: LuScrollText,
      href: `${root}/posts`,
      active: pathname.startsWith(`${root}/posts`),
    },
    {
      id: 2,
      label: "Photos",
      icon: TbPhotoSquareRounded,
      href: `${root}/photos`,
      active: pathname.startsWith(`${root}/photos`),
    },
    {
      id: 3,
      label: "saved Photos",
      icon: MdOutlineSaveAlt,
      href: `${root}/saved-photos`,
      active: pathname.startsWith(`${root}/saved-photos`),
    },
    {
      id: 4,
      label: "saved Posts",
      icon: MdOutlineSaveAlt,
      href: `${root}/saved-posts`,
      active: pathname.startsWith(`${root}/saved-posts`),
    },
  ];

  return routes;
};

export default useRoutes;
