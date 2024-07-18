"use client";

import React, { Suspense } from "react";
import { PremiumAdProps } from "../Home/PremiumCard";
import { Button } from "@nextui-org/react";

export default function SidebarComponent({
  filteredAds,
}: {
  filteredAds: PremiumAdProps[];
}) {
  return (
    <section className="w-full h-full flex flex-col p-6 gap-4">
      <h2 className="font-semibold">Вы подписаны <br />на следующие категории</h2>
      <div>
        <div className="flex flex-col">
          <span className="text-lg">Работа</span>
          <span className="text-xs font-normal">Мувинг / Доставка / 3Д Дизайн</span>
          <a href="#" className="text-blue-500">15 новых обьявлений</a>
        </div>
      </div>
      <Button radius="full">Смотреть все</Button>
    </section>
  );
}

      // const minPrice = filteredAds.reduce(
      //   (min, ad) => Math.min(min, ad.amount),
      //   Infinity
      // );
      // const maxPrice = filteredAds.reduce((max, ad) => Math.max(max, ad.amount), 0);
      // React.useEffect(() => {
      //   console.log([minPrice, maxPrice]);
      // }, [minPrice, maxPrice]);