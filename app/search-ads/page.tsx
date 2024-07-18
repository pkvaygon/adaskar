import PremiumCard from "@/components/Home/PremiumCard";
import SidebarComponent from "@/components/SearchAds/SidebarComponent";
import TopSidebar from "@/components/SearchAds/TopSidebar";
import { AnchorIcon } from "@/icons";
import { fakedata } from "@/static";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function SearchAdsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams);
  const { category } = searchParams;

  const filteredAds = fakedata.filter((ad) => ad.category === category);
  return (
    <div className="flex container h-auto w-full p-2">
      <div className="w-full flex-1 flex-col pl-2 h-auto">
        <TopSidebar />
        <section className="mt-4 h-full w-full overflow-visible">
          <div className="min-h-[90%] h-auto py-2 w-full grid grid-cols-3 gap-4 rounded-medium border-small p-2 border-divider">
            <Suspense fallback={<Loading />}>
              {filteredAds.map((ad) => (
                <PremiumCard key={ad.id} item={ad} />
              ))}
            </Suspense>
          </div>
        </section>
      </div>
      <aside className="w-1/4 border-divider border-small rounded-lg h-dvh">
        <SidebarComponent filteredAds={filteredAds} />
      </aside>
    </div>
  );
}
