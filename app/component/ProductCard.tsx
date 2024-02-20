import Image from "next/image";
import { simplifiedProduct } from "../interface";
import Link from "next/link";

export default function ProductCard({
  _id,
  name,
  imageUrl,
  slug,
  price,
  categoryName,
}: simplifiedProduct) {
  return (
    <div key={_id} className="group relative">
      <Link href={`/product/${slug}`}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <Image
            src={imageUrl}
            alt="Product Image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{categoryName}</p>
          </div>
          <p className="text-sm font-medium text-gray-500">${price}</p>
        </div>
      </Link>
    </div>
  );
}
