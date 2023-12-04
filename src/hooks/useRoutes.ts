"use client";

const root = "/dashboard";

import { usePathname } from "next/navigation";

import { LuScrollText } from "react-icons/lu";
import { TbFileDownload } from "react-icons/tb";
import { TbPhotoDown } from "react-icons/tb";
import { TbPhoto } from "react-icons/tb";

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
      icon: TbPhoto,
      href: `${root}/photos`,
      active: pathname.startsWith(`${root}/photos`),
    },
    {
      id: 3,
      label: "saved Photos",
      icon: TbPhotoDown,
      href: `${root}/saved-photos`,
      active: pathname.startsWith(`${root}/saved-photos`),
    },
    {
      id: 4,
      label: "saved Posts",
      icon: TbFileDownload,
      href: `${root}/saved-posts`,
      active: pathname.startsWith(`${root}/saved-posts`),
    },
  ];

  return routes;
};

export default useRoutes;
