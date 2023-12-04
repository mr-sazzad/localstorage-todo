import DashboardButton from "@/components/DashboardButton";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center lg:px-[50px] px-[20px]">
        <div className="flex flex-col sm:flex-row flex-wrap gap-5">
          <div className="w-full sm:w-[280px] bg-green-300 lg:mt-[120px] p-5 rounded-md">
            <div className="">
              <p className="text-xl font-semibold mb-3">Explore Posts</p>
              <p>
                Explore our posts page, where a simple click lets you like and
                save posts, all seamlessly stored in your local browser for easy
                undo actions.
              </p>
              <DashboardButton
                text="All Posts"
                color="bg-green-500"
                href="/dashboard/posts"
              />
            </div>
          </div>
          <div className="w-full sm:w-[280px] bg-[#97f1e5] lg:mt-10 p-5 rounded-md flex flex-grow">
            <div className="w-full">
              <p className="text-xl font-semibold mb-3">Explore Photos</p>
              <p>
                Explore our photos page, where a simple click lets you like and
                save photos, all seamlessly stored in your local browser for
                easy undo actions. Engage with our photos like and save with a
                click, effortlessly managed in your local storage.
              </p>
              <DashboardButton
                text="All Photos"
                color="bg-[#13AC95]"
                href="/dashboard/photos"
              />
            </div>
          </div>
          <div className="w-full sm:w-[280px] bg-orange-300 lg:mt-[80px] p-5 rounded-md flex flex-grow">
            <div className="w-full">
              <p className="text-xl font-semibold mb-3">Explore saved posts</p>
              <p>
                Discover and engage with posts on our platform, where you can
                effortlessly manage your saved content, express preferences with
                likes, and explore efficiently through dynamic search and
                pagination options.
              </p>
              <DashboardButton
                text="Saved Posts"
                color="bg-orange-500"
                href="/dashboard/saved-posts"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
