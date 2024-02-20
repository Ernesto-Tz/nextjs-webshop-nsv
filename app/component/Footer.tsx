import Link from "next/link";
import FooterListContent from "./FooterListContent";

export default function Footer() {
  return (
    <footer className="px-10 pt-12 bg-primary">
      <div className="container mx-auto flex flex-wrap justify-between text-white mb-4">
        <div className="mb-4 md:px-8 flex flex-col w-full md:w-1/2 lg:mb-0 lg:w-1/4">
          <Link href="/">
            <h3 className="bg-white py-2 text-xl text-center font-bold text-black">
              The Running<span className="text-primary">Shop</span>
            </h3>
          </Link>
          <p className="mt-6 text-small">
            Vestibulum molestie mattis ante magnis eget eget egestas diam
            sapien.
          </p>
        </div>
        <FooterListContent
          title="Useful Links"
          contentArray={[
            "Become a Franchise",
            "Careers",
            "Sell with us",
            "Corporate Governance",
          ]}
        />
        <FooterListContent
          title="Policy"
          contentArray={[
            "Privacy Policy",
            "Track Order",
            "Return Policy",
            "Terms of use",
          ]}
        />
        <FooterListContent
          title="Help"
          contentArray={["Payments", "Shipping", "Return & Refund", "FAQ"]}
        />
      </div>
      <div className="flex py-8 justify-center text-white text-sm">
        <h4>© 2024 All rights reserved</h4>
      </div>
    </footer>
  );
}
