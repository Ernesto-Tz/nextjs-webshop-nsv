import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import ProductCard from "../component/ProductCard";

async function getData(category: string) {
  const query = `*[_type == 'product' && category->name == '${category}' ]{
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
  }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = 'force-dynamic'

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            imageUrl={product.imageUrl}
            slug={product.slug}
            price={product.price}
            categoryName={product.categoryName}
          />
          ))}
        </div>
      </div>
    </div>
  );
}
