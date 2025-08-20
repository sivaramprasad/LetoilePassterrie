import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
         <div className="w-full">
           <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5 justify-center fn-text">
                Made For You
              </h2>
            
        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
              
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg  py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
           
            <div className="text-right br-img">
             <Image
                                  src="/images/banners/px3.jpg"
                                  alt="star icon"
                                  width={500}
                                  height={300}
                                />
<div className="custimg -mt-[10px] opacity-90">
  <h2 className="font-bold text-xl lg:text-heading-4 mb-2.5">
    Custom Cakes
  </h2>

  <a
    href="#"
    className="inline-flex font-medium text-custom-sm py-2.5 px-8.5 rounded-md ease-out duration-200"
  >
    Shop Now
  </a>
</div>

            </div>
          </div>

          {/* <!-- promo banner small --> */}
           <div className="relative z-1 overflow-hidden rounded-lg  py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
           
            <div className="text-right br-img">
             <Image
                                  src="/images/banners/giftpack.jpg"
                                  alt="star icon"
                                  width={500}
                                  height={300}
                                />
<div className="custimg -mt-[10px] opacity-90">
  <h2 className="font-bold text-xl lg:text-heading-4 mb-2.5">
Gifting  </h2>

  <a
    href="#"
    className="inline-flex font-medium text-custom-sm py-2.5 px-8.5 rounded-md ease-out duration-200"
  >
    Enquire Now
  </a>
</div>

            </div>
          </div>
        </div>
          </div>
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFF5E1] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
           <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5 text-center">
                Who We Are
              </h2>

            <p className="mb-m">
             Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.
Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.
Lorem Ipsum proin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor Ipsum.



            </p>
 <Image
            src="/images/banners/chef.jpg"
            alt="promo img"
            className="absolute bottom-0 right-4  -z-1 whomade"
            width={274}
            height={350}
          />
          </div>

         
        </div>
 
      </div>
    </section>
  );
};

export default PromoBanner;
