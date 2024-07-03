import CategoriesComponent from "@/components/Home/CategoriesComponent";
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
          <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-5xl font-semibold">САЙТ ОБЪЯВЛЕНИЙ</h1>
            <h6 className="text-white  text-2xl font-medium">
              Легко купить, легко продать
            </h6>
          </div>
          <CategoriesComponent/>
        </div>
      </div>
      <div>
        {/* <PremiumAdsComponent /> */}
      </div>
    </section>
  );
}
