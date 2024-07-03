"use client";
import { categoryItems, fakedata } from "@/static";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectCategory() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const { replace } = useRouter();

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (searchParams.has("category")) {
      return;
    } else {
      params.set("category", "all-category");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [searchParams, pathname, replace]);

  function handleSelectChange(category: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    replace(`${pathname}?${params.toString()}`);
  }

  function countAdsByCategory() {
    const adsCountByCategory: { [key: string]: number } = {};
    fakedata.forEach(ad => {
      if (!adsCountByCategory[ad.category]) {
        adsCountByCategory[ad.category] = 1;
      } else {
        adsCountByCategory[ad.category]++;
      }
    });
    return adsCountByCategory;
  }

  const adsCountByCategory = countAdsByCategory();

  return (
    <Select
      onValueChange={(value) => handleSelectChange(value)}
      defaultValue={selectedCategory || undefined}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-zinc-800">
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categoryItems.map((category) => (
            <SelectItem className="cursor-pointer" key={category.slug} value={category.slug}>
              {category.name} ({adsCountByCategory[category.slug] || 0})
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
