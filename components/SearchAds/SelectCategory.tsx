"use client";
import { categoryItems, fakedata } from "@/static";
import React from "react";
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


  function countAdsByCategory() {
    const adsCountByCategory: { [key: string]: number } = {};
    fakedata.forEach((ad) => {
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
      onValueChange={(value) => console.log(value)}
      defaultValue={'real-estate' || undefined}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-zinc-800">
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categoryItems.map((category) => (
            <SelectItem
              className="cursor-pointer"
              key={category.slug}
              value={category.slug}>
              {category.name} ({adsCountByCategory[category.slug] || 0})
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
