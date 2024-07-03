import { PremiumIcon } from "@/icons";
import { categoryItems, fakedata } from "@/static";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

export interface PremiumAdProps {
  id: number;
  isPremium: boolean;
  title: string;
  description: string;
  state: string;
  city: string;
  address: string;
  amount: number;
  image: string[];
  phoneNumber: string;
  createdUserId: string;
  views: number;
  createdAt: Date;
  category: string;
  subcategory: string;
}

export default function PremiumCard({ item }: { item: PremiumAdProps }) {
  return (
    <div className="w-full aspect-[9/16] shadow-2xl dark:bg-[#3F3F46] cursor-pointer relative box-content">
      <div className="h-1/2 w-full relative">
        <Image
          priority
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center"
          src={item.image[0]}
          alt={item.title}
        />
        {item.isPremium && (
          <Chip
            startContent={<PremiumIcon className="max-md:w-4 max-md:h-4" />}
            className="absolute top-2 left-2 text-white border-none w-[20px] overflow-hidden"
            variant="shadow"
            classNames={{
              base: " bg-gradient-to-br from-indigo-500 to-pink-500 border-small shadow-pink-500/30",
              content:
                "drop-shadow shadow-black text-xs text-white max-md:font-semibold font-bold p-1",
            }}>
            Premium
          </Chip>
        )}
        <div className="absolute bottom-2 right-2">
          <Chip
            variant="light"
            className="bg-white/30 p-1 dark:bg-black/30"
            classNames={{
              content: "font-semibold max-md:text-xs",
            }}>
            {item.createdAt.toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
          </Chip>
        </div>
      </div>
      {/* adType section */}
      <div className="absolute top-[43%] left-1  bg-violet-700 p-2 rounded-full">
        <div className="w-8 h-8 relative  rounded-full  ">
          <Image
            sizes="300px"
            priority
            fill
            src={
              categoryItems.find((category) => category.slug === item.category)
                ?.icon || ""
            }
            alt={item.category}
          />
        </div>
      </div>
      <div className="h-1/2 py-3 max-md:py-1 w-full container flex flex-col items-start justify-start max-md:gap-1 gap-2">
        <h3 className="font-semibold text-lg max-md:text-xs">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400  line-clamp-3 text-ellipsis max-md:text-[8px] max-md:line-clamp-2">
          {item.description}
        </p>
        <div>
          <span className="max-md:text-[10px]">{item.state} |</span>
          <span className="max-md:text-[10px]"> {item.city}</span>
        </div>
        <span className="font-semibold max-md:text-sm">
          {fakedata[0].amount} $
        </span>
      </div>
    </div>
  );
}
