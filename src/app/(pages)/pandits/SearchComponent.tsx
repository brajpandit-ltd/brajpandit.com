"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { debounce } from "@/utils/unitsFun";

const SearchComponent = ({ search }: { search: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [query, setQuery] = useState(params.get("search") || "");
  //   const [loading, setLoading] = useState(false);

  const debouncedSetQuery = debounce((searchQuery: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (searchQuery) {
      newParams.set("search", searchQuery);
    } else {
      newParams.delete("search");
    }

    // setLoading(true);
    router.push(`${pathname}?${newParams.toString()}`);
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // update local state
    debouncedSetQuery(value); // update URL after debounce
  };

  useEffect(() => {
    if (search) {
      setQuery(search);
      //   setLoading(false);
    }
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search Pandit Ji"
        value={query}
        onChange={handleInputChange}
        className="
        sm:w-80
        lg:w-110
        h-10
        w-40
        px-4
        rounded-full
        border border-gray-300
        text-base
        focus:outline-none
        focus:ring-2 focus:ring-secondary
        focus:border-secondary
      "
      />
      {/* {loading && (
        <div className="flex items-center">
          <div className="h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )} */}
    </>
  );
};

export default SearchComponent;
