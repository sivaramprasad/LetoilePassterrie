"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Breadcrumb from "../Common/Breadcrumb";
import CategoryDropdown from "./CategoryDropdown";
import cakesMenuData from "../Shop/cakesMenuData";
import SingleGridItem from "../Shop/SingleGridItem";
import SingleListItem from "../Shop/SingleListItem";
import { desserts }  from "../Shop/cakesMenuData";
import { FaHeart, FaRegHeart } from "react-icons/fa";


const ShopWithSidebar = () => {
  const [productStyle, setProductStyle] = useState("grid");
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [cart, setCart] = useState<{ [key: number]: number }>({});
const [favourites, setFavourites] = useState<number[]>([]);

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  // cart handlers
  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: qty };
    });
  };

 const categories = [
    {
      name: "Blue berries bake cheesecake",
      isRefined: true,
    },
    {
      name: "Banoffee pie",
      isRefined: false,
    },
    {
      name: "Hazelnut mousse cake",
      isRefined: false,
    },
    {
      name: "Olive oil brownie",
      isRefined: false,
    },
    {
      name: "Classic tiramisu",
      isRefined: false,
    },
    {
      name: "Pecan nut fudge",
      isRefined: false,
    },
    {
      name: "Sticky date pudding with toffee sauce",
      isRefined: false,
    },
    {
      name: "Milk chocolate cake",
      isRefined: false,
    },
    {
      name: "Opera",
      isRefined: false,
    },
     {
      heading:"Sugar free dessert",
    },
{
      name: "Pistachio pannacotta ",
      isRefined: false,
    },
    {
      name: "Pumpkin pie in a jar",
      isRefined: false,
    },
    {
      name: "Strawberry cheesecake",
      isRefined: false,
    },
    {
      name: "Coffee cake",
      isRefined: false,
    },
    {
      heading:"Gluten free dessert",
    },
{
      name: "Almond orange cake",
      isRefined: false,
    },
    {
      name: "Pumpkin parfait",
      isRefined: false,
    },
    {
      name: "Poach pear in lavender syrup",
      isRefined: false,
    },
    {
      name: "Gluten free chocolate cake",
      isRefined: false,
    },
    {
      heading:"Breads",
    },
{
      name: "Sourdough ",
      isRefined: false,
    },
    {
      name: "Focaccia",
      isRefined: false,
    },
   
 {
      heading:"French Bugatti",
    },
{
      name: "Brioche",
      isRefined: false,
    },
    {
      name: "Multigrain",
      isRefined: false,
    },
    {
      heading:"Doughnuts box of 4",
    },
{
      name: "Rich chocolate ",
      isRefined: false,
    },
    {
      name: "Milk chocolate",
      isRefined: false,
    },
    {
      name: "Biscoff white chocolate",
      isRefined: false,
    },
    {
      name: "Custard berliner",
      isRefined: false,
    },
    {
      name: "Strawberry berliner",
      isRefined: false,
    },
     {
      heading:"Macaroons box of 10",
    },
{
      name: "Hazelnut",
      isRefined: false,
    },
    {
      name: "Pistachio",
      isRefined: false,
    },
    {
      name: "Bitter chocolate",
      isRefined: false,
    },
    {
      name: "Biscoff",
      isRefined: false,
    },
    {
      name: "Mango",
      isRefined: false,
    },
    {
      heading:"Cup cakes box of 4",
    },
{
      name: "Rich chocolate",
      isRefined: false,
    },
    {
      name: "Salted caramel",
      isRefined: false,
    },
    {
      name: "Peanut butter",
      isRefined: false,
    },
    {
      name: "Red velvet",
      isRefined: false,
    },
    {
      name: "Blue berrie",
      isRefined: false,
    },
    {
      heading:"Cakes for 8 to 10 portions",
    },
{
      name: "Hazelnut croquante",
     
      isRefined: false,
    },
    {
      name: "Pistachio cake",
      isRefined: false,
    },
    {
      name: "Blue berry Vanilla",
      isRefined: false,
    },
    {
      name: "Strawberry vanilla",
      isRefined: false,
    },
    {
      name: "Milk chocolate layer cake",
      isRefined: false,
    },
    {
      name: "Fresh fruit bliss",
      isRefined: false,
    },
    {
      name: "Mango passion fruit cake",
      isRefined: false,
    },
    {
      name: "Lotus biscoff",
      isRefined: false,
    },
     {
      name: "Coconut matcha cake",
      
      isRefined: false,
    },
    {
      name: "Red velvet cake",
      isRefined: false,
    },
    {
      name: "Bitter chocolate cake",
      isRefined: false,
    },
     {
      name: "Almond butter cream cake (gluten free) ",
      isRefined: false,
    },
  ];


  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    // close sidebar on outside click
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest(".sidebar-content")) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productSidebar]);

  return (
    <>
      
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6] mt-10">
        <div className="max-w-[1328px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-7.5">
            {/* Sidebar Start */}
            <div
              className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[370px] xl:max-w-[370px] w-full ease-out duration-200 ${
                productSidebar
                  ? "translate-x-0 bg-white p-5 h-screen overflow-y-auto"
                  : "-translate-x-full"
              }`}
            >
              {/* <button
                onClick={() => setProductSidebar(!productSidebar)}
                aria-label="button for product sidebar toggle"
                className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
                  stickyMenu
                    ? "lg:top-20 sm:top-34.5 top-35"
                    : "lg:top-24 sm:top-39 top-37"
                }`}
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
                  />
                </svg>
              </button> */}

              <form onSubmit={(e) => e.preventDefault()}>
                <CategoryDropdown categories={categories} />
              </form>
            </div>
            {/* Sidebar End */}

            {/* Content Start */}
            <div className="xl:max-w-[945px] w-full mt-20 md:mt-0">
              <div
  className={`${
    productStyle === "grid"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5"
      : "flex flex-col gap-7.5"
  }`}
>
  {cakesMenuData.map((item, key) =>
    productStyle === "grid" ? (
      <div
        key={key}
        className="bg-white rounded shadow-sm flex flex-col justify-between h-[320px] w-full"
      >
        {/* Image Box */}
        <div className="relative inline-block w-full h-[200px]">
          <button
    onClick={() =>
      setFavourites((prev) =>
        prev.includes(item.id)
          ? prev.filter((fid) => fid !== item.id)
          : [...prev, item.id]
      )
    }
    className="right-2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition btnwsh"
  >
    {favourites.includes(item.id) ? (
     <FaHeart
      size={20}
      style={{ color: "#ef4444", fill: "#ef4444", stroke: "#ef4444" }}
    />
  ) : (
    // outlined heart — force stroke color (no fill)
    <FaRegHeart
      size={20}
      style={{ color: "#ef4444", fill: "#ef4444", stroke: "#ef4444" }}
    />
    )}
  </button>
  
          <img
            src={item.imgs?.previews?.[0] || "/placeholder.png"}
            alt={item.title}
            className="w-full h-full object-cover"
          />
            {/* Favourite Icon */}
        </div>

        {/* Info + Price + Add Button */}
        <div className="p-3 flex flex-col items-center gap-2 flex-1">
          

          
        {cart[item.id] ? (
  <div className="flex items-center justify-center gap-2 mt-2">
    <button
      onClick={() => removeFromCart(item.id)}
      className="px-2 py-1 bg-gray-200 rounded"
    >
      -
    </button>
    <input
      type="text"
      value={cart[item.id]}
      readOnly
      className="w-10 text-center border rounded"
    />
    <button
      onClick={() => addToCart(item.id)}
      className="px-2 py-1 bg-gray-200 rounded"
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => addToCart(item.id)}
    className="absolute btn-add btn mt-2 bg-blue py-1 rounded shadow-sm bg-btn"
  >
    Add
  </button>
)}

          <h3 className="mt-5 font-medium text-gray-800 text-center truncate">
            {item.title}
          </h3>
          <p className="font-semibold">₹{item.price}</p>
        </div>
      </div>
    ) : (
      <SingleListItem item={item} key={key} />
    )
  )}
</div>


           <div className="mb-10 mt-10 flex items-center justify-center">
  <div>
    <h2 className="font-semibold text-xl xl:text-heading-5 text-dark fn-text">
      Sugar free dessert
    </h2>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  
    {desserts.map((p) => (

    <div
      key={p.id}
      className="plist p-3  rounded shadow-sm h-full bg-white"
    >
      <div className="flex">
        {/* Left Info */}
        <div className="flex-1 pr-3">
          <div className="itemnameholder flex items-center gap-2">
            <span className="itemname font-medium text-gray-800">
              {p.title}
            </span>
          </div>
          <div className="priceholder mt-1">
            <span className="font-semibold">₹{p.price}</span>
          </div>
        </div>

        {/* Right Image + Cart Buttons */}
        <div className="relative inline-block w-[150px] h-[150px] text-center">
          <button
    onClick={() =>
      setFavourites((prev) =>
        prev.includes(p.id)
          ? prev.filter((fid) => fid !== p.id)
          : [...prev, p.id]
      )
    }
    className="right-2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition btnwsh"
  >
  {favourites.includes(p.id) ? (
    // filled heart — force color/fill/stroke
    <FaHeart
      size={20}
      style={{ color: "#ef4444", fill: "#ef4444", stroke: "#ef4444" }}
    />
  ) : (
    // outlined heart — force stroke color (no fill)
    <FaRegHeart
      size={20}
      style={{ color: "#ef4444", fill: "#ef4444", stroke: "#ef4444" }}
    />
  )}
  </button>
          <Image
            src={p.imgs.previews[0]}
            alt={p.title}
            width={102}
            height={102}
            className="menuimg prodimg mx-auto rounded"
          />

        {cart[p.id] ? (
  <div className="flex items-center justify-center gap-2 mt-2">
    <button
      onClick={() => removeFromCart(p.id)}
      className="px-2 py-1 bg-gray-200 rounded"
    >
      -
    </button>
    <input
      type="text"
      value={cart[p.id]}
      readOnly
      className="w-10 text-center border rounded"
    />
    <button
      onClick={() => addToCart(p.id)}
      className="px-2 py-1 bg-gray-200 rounded"
    >
      +
    </button>
  </div>
) : (
  <button
    onClick={() => addToCart(p.id)}
    className="btn-add btn mt-2 bg-blue py-1 rounded shadow-sm bg-btn"
  >
    Add
  </button>
)}

        </div>
        
      </div>
    </div>
  ))}
</div>



              {/* Products End */}
            </div>
          </div>
        </div>
   
      </section>
    </>
  );
};

export default ShopWithSidebar;
