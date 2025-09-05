"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import Image from "next/image";

const SingleGridItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();

  const dispatch = useDispatch<AppDispatch>();

  // update the QuickView state
  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };



  return (


    <div className="relative rounded-lg overflow-hidden">
      {/* Product Image */}
     <Image className="menuimg" src={item.imgs.previews[0]} alt={item.title} width={250} height={150} />


     


  {/* Button over the image at the bottom center */}
  <div className="relative bottom-3 left-1/2 transform -translate-x-1/2">
    <button className="bg-blue  px-4 py-2 rounded hover:bg-darkBlue transition">
      Add
    </button>
  </div>


      {/* Product Info */}
      <div className="p-4">
        <span className="itemname font-medium text-gray-800">{item.title}</span>
        <p className="text-gray-500">Rs.{item.price}</p>
      </div>
    </div>
  );
};
 

export default SingleGridItem;
