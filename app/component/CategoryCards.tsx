import { client } from "../lib/sanity";
import CategoryCard from "./CategoryCard";
import { fullCategory } from "../interface";

async function getData() {
  const query = `*[_type == 'category']{
    name,
      "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);
  return data;
}

export default async function CategoryCards() {
  const data: fullCategory[] = await getData();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 xl:gap-x-8">
        {data.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
