import Link from "next/link";
import Image from "next/image";
import { fullCategory } from "../interface";

export default function CategoryCard({ name, imageUrl }: fullCategory) {
  return (
    <div key={name} className="group">
      <Link href={`/${name}`}>
        <div
          className="flex items-center justify-center h-96 bg-cover bg-no-repeat bg-center bg-gray-200 aspect-square w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-[30rem]"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        >
          <p className="inline-block py-4 px-8 bg-primary/60 font-medium text-white">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
