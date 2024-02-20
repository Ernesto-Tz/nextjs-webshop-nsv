import Image from "next/image";
import Hero from "./component/Hero";
import Newest from "./component/Newest";
import CategoryCards from "./component/CategoryCards";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <CategoryCards />
      <Newest />
    </div>
  );
}
