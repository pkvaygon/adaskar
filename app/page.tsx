import PremiumAdsComponent from "@/components/Home/PremiumAdsComponent";
import Image from "next/image";

export default async function Home() {
  return (
    <section>
      <div className="w-full h-screen">
        <div className="relative w-full h-full banner">
          <Image
            priority
            sizes="(min-width: 768px) 100vw, 100vh"
            fill
            className="object-cover -z-10 object-center"
            src="https://res.cloudinary.com/dxvf93ovn/image/upload/v1713080546/adaskar/Eva_crzyjg.jpg"
            alt="AdAskar"
          />
        </div>
      </div>
      <div>
        <PremiumAdsComponent/>
      </div>
    </section>
  );
}
