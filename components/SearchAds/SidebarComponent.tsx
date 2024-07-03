"use client";

import React, { Suspense } from "react";
import { PremiumAdProps } from "../Home/PremiumCard";
import PriceRange from "./PriceRange";
import SelectCategory from "./SelectCategory";
import Loading from "@/app/search-ads/loading";

export default function SidebarComponent({
  filteredAds,
}: {
  filteredAds: PremiumAdProps[];
}) {
  const minPrice = filteredAds.reduce(
    (min, ad) => Math.min(min, ad.amount),
    Infinity
  );
  const maxPrice = filteredAds.reduce((max, ad) => Math.max(max, ad.amount), 0);
  React.useEffect(() => {
    console.log([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  return (
    <section className="w-full h-full flex flex-col p-2 gap-4">
      <Suspense fallback={<Loading/>}>
      <SelectCategory />
      <PriceRange className="h-8 bg-red-400" minPrice={minPrice} maxPrice={maxPrice} />
      </Suspense>
    </section>
  );
}
