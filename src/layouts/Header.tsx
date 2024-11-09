"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const path = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Display skeleton when component is not mounted.
  if (!isMounted) {
    return (
      <div className="flex w-full animate-pulse items-center justify-between gap-5 p-8">
        <div className="h-8 w-56 rounded-xl bg-gray-700" />

        <div className="flex items-center gap-6">
          <div className="h-6 min-w-56 bg-gray-700"></div>
          <div className="h-6 w-6 rounded-[8px] bg-gray-700" />
          <div className="h-8 w-8 rounded-[8px] bg-gray-700" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-between gap-5 p-8">
      <h1 className="hidden text-xl font-semibold capitalize text-white md:block">
        {path === "/" ? "Dashboard" : path.replace(/^\//, "")}
      </h1>
      <div className="flex items-center justify-between gap-6">
        {/* Search bar */}
        <form className="min-w-56" onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              id="default-search"
              className="block w-full rounded-[8px] border-none bg-[#282c35] p-2 ps-3 text-xs font-normal text-white outline-none"
              placeholder="Search..."
            />
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pr-3">
              <Search className="h-3.5 w-3.5 text-gray-400" />
            </div>
          </div>
        </form>

        {/* Notification */}
        <div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2591 17.5711C8.3191 17.5711 6.37905 17.263 4.53892 16.6469C3.8395 16.4054 3.30661 15.9142 3.07348 15.273C2.83201 14.6319 2.91527 13.9242 3.29829 13.2913L4.25582 11.701C4.45566 11.3679 4.63884 10.7018 4.63884 10.3105V7.90417C4.63884 4.80676 7.16173 2.28386 10.2591 2.28386C13.3566 2.28386 15.8795 4.80676 15.8795 7.90417V10.3105C15.8795 10.6935 16.0626 11.3679 16.2625 11.7093L17.2117 13.2913C17.5697 13.8908 17.6363 14.6152 17.3949 15.273C17.1534 15.9308 16.6288 16.4304 15.9711 16.6469C14.1392 17.263 12.1992 17.5711 10.2591 17.5711ZM10.2591 3.53282C7.85282 3.53282 5.88779 5.48952 5.88779 7.90417V10.3105C5.88779 10.9183 5.638 11.8176 5.32993 12.3421L4.37239 13.9325C4.18921 14.2406 4.13925 14.5653 4.2475 14.8401C4.34741 15.1232 4.5972 15.3396 4.93859 15.4562C8.41902 16.6219 12.1076 16.6219 15.588 15.4562C15.8878 15.3563 16.1209 15.1315 16.2292 14.8317C16.3374 14.532 16.3124 14.2072 16.1459 13.9325L15.1884 12.3421C14.872 11.8009 14.6305 10.91 14.6305 10.3022V7.90417C14.6305 5.48952 12.6738 3.53282 10.2591 3.53282Z"
              fill="#9E9E9E"
            />
            <path
              d="M11.808 3.75765C11.7497 3.75765 11.6914 3.74932 11.6332 3.73267C11.3917 3.66606 11.1586 3.6161 10.9337 3.58279C10.226 3.4912 9.54323 3.54116 8.9021 3.73267C8.66896 3.80761 8.41917 3.73267 8.26097 3.55781C8.10277 3.38296 8.05281 3.13317 8.1444 2.90836C8.48578 2.03409 9.31842 1.45956 10.2676 1.45956C11.2168 1.45956 12.0495 2.02576 12.3909 2.90836C12.4741 3.13317 12.4325 3.38296 12.2743 3.55781C12.1494 3.69104 11.9745 3.75765 11.808 3.75765Z"
              fill="#9E9E9E"
            />
            <path
              d="M10.2592 19.4695C9.43492 19.4695 8.63559 19.1365 8.05274 18.5536C7.4699 17.9708 7.13684 17.1715 7.13684 16.3472H8.3858C8.3858 16.8384 8.58563 17.3213 8.93534 17.671C9.28505 18.0208 9.76798 18.2206 10.2592 18.2206C11.2917 18.2206 12.1327 17.3796 12.1327 16.3472H13.3816C13.3816 18.0707 11.9828 19.4695 10.2592 19.4695Z"
              fill="#9E9E9E"
            />
            <circle
              cx="14.4058"
              cy="4.64025"
              r="2.0816"
              fill="#1FCB4F"
              stroke="#1A1C22"
              strokeWidth="0.832639"
            />
          </svg>
        </div>

        {/* Avatar */}
        <div className="aspect-square rounded-lg">
          <Image
            src="/images/photo.png"
            alt="Jetos Image"
            width="33"
            height="33"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
