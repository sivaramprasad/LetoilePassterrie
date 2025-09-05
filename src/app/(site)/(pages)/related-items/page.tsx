import React from "react";
import RelatedItemPage from "@/components/Home/ItemPage/related";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Page | NextCommerce Nextjs E-commerce template",
  description: "This is Shop Page for NextCommerce Template",
  // other metadata
};

const ItemPagemodule = () => {
  return (
    <main>
      <RelatedItemPage />
    </main>
  );
};

export default ItemPagemodule;
