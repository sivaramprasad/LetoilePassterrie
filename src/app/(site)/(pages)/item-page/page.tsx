import React from "react";
import ItemPage from "@/components/Home/ItemPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
};

const ItemPagemodule = () => {
  const item = {
    id: 1,
    title: "Strawberry cheesecake",
    price: 325,
    description: "Lorem Ipsum is simply dummy text of the printing industry.",
    img: "/images/banners/itempageimg.jpg",
  };

  return (
    <main>
      <ItemPage item={item} />
    </main>
  );
};

export default ItemPagemodule;
