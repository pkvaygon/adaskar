"use client";
import { categoryItems } from "@/static";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function CategoriesComponent() {
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="flex justify-center items-center gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
      {categoryItems.map((category, index) => (
        <Link
          href={
            "/search-ads" + "?" + createQueryString("category", category.slug)
          }
          key={index}
          className="px-2 transition-background py-4 rounded-lg hover:bg-violet-500 flex justify-center items-center gap-2">
          <div className="w-6 h-6 relative">
            <Image sizes="24px" fill src={category.icon} alt={category.name} />
          </div>
          <h4 className="text-white font-semibold">{category.name}</h4>
        </Link>
      ))}
    </div>
  );
}
