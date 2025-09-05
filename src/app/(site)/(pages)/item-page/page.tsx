import React from "react";
import ItemPage from "@/components/Home/ItemPage";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ItemPagemodule = () => {
  return (
    <main>
      <ItemPage />
    </main>
  );
};

export default ItemPagemodule;
