import { PremiumIcon } from "@/icons";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

const premiumAds = [
  {
    id: 0,
    isPremium: true,
    title: "Название Объявления",
    description:
      "Абсолютно бессмысленный текст для описания карточки Абсолютно бессмысленный текст для описания карточки",
    state: "California",
    city: "Los Angeles",
    address: "8123 W Devon Ave",
    amount: 25,
    salaryType: "hourly",
    image: ["https://eva.osclass-pro.ru/oc-content/uploads/0/17_preview.jpg"],
    phoneNumber: "+18478468245",
    createdUserId: "",
    views: 43,
    createdAt: new Date(),
    adType: "аренда квартиры",
  },
];
interface PremiumCardProps {
  id: string;
  title: string;
  image: string[];
  description: string;
  state: string;
  city: string;
  amount: number;
  isPremium: boolean;
  address: string;
  createdAt: string;
  adType: string;
  createdUserId: string;
  phoneNumber: string;
  salaryType: string;
}

export default function PremiumCard() {
  return (
    <div className="w-full aspect-[9/16] shadow-2xl dark:bg-[#3F3F46] cursor-pointer">
      <div className="h-1/2 w-full relative">
        <Image fill className="object-cover object-center" src={premiumAds[0].image[0]} alt={premiumAds[0].title} />
        {premiumAds[0].isPremium && (
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
            {premiumAds[0].createdAt.toLocaleDateString("en-US", {
              dateStyle: "long",
            })}
          </Chip>
        </div>
      </div>
      <div className="h-1/2 py-3 max-md:py-1 w-full container flex flex-col items-start justify-start max-md:gap-1 gap-2">
        <h3 className="font-semibold text-lg max-md:text-xs">{premiumAds[0].title}</h3>
        <p className="text-gray-600 dark:text-gray-400  line-clamp-3 text-ellipsis max-md:text-[8px] max-md:line-clamp-2">
          {premiumAds[0].description}
        </p>
        <div>
          <span className="max-md:text-[10px]">{premiumAds[0].state} |</span>
          <span className="max-md:text-[10px]"> {premiumAds[0].city}</span>
        </div>
        <span className="font-semibold max-md:text-sm">{premiumAds[0].amount} $</span>
      </div>
    </div>
  );
}
