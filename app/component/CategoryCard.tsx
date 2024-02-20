import Link from "next/link";
import Image from "next/image";
import { fullCategory } from "../interface";

export default function CategoryCard({ name, imageUrl }: fullCategory) {
  return (
    <div key={name} className="group">
      <Link href={`/${name}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            src={imageUrl}
            alt="Category Image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={600}
          />
        </div>
        <button className="font-medium text-primary hover:text-primary/80">
          {name}
        </button>
      </Link>
    </div>
  );
}
