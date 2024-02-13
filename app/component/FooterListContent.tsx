import Link from "next/link";

interface FooterListContent {
  title: string;
  contentArray: string[];
}

export default function FooterListContent(props: FooterListContent) {
  return (
    <div className="mb-4 w-full md:w-1/2 lg:mb-0 lg:w-1/4">
      <h2 className="mb-2 border-l-2 border-secondary pl-4 text-medium font-semibold">{props.title}</h2>
      <div className="flex flex-col gap-2 px-5 text-sm">
        {props.contentArray.map((item) => (
          <Link  href="#" key={item} className="my-2 hover:opacity-70">{item}</Link>
        ))}
      </div>
    </div>
  );
}