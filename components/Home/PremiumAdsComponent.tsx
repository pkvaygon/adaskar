import PremiumCard from "./PremiumCard";

export default function PremiumAdsComponent() {
  return (
    <section className="h-[300px] ">
      <div className="container py-4 font-semibold">
        <h2 className="text-3xl">Премиум Объявления</h2>
      </div>
      <div className="container grid max-md:grid-cols-2 grid-cols-4 grid-flow-row gap-4">
        <PremiumCard />
        <PremiumCard />
        <PremiumCard />
        <PremiumCard />
      </div>
    </section>
  );
}
