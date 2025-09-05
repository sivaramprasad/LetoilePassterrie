"use client";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import RelatedItemPage from "@/components/Home/ItemPage/related";

const Categories = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="modalProductDetailsData">
          <div className="" style={{ overflowX: "hidden" }}>
            <div className="row flex flex-col md:flex-row">
              {/* Left Image */}
             <div className="col-12 md:col-6 left w-full md:w-1/2 mp-image-block px-0 md:px-3 pr-0 md:pr-10 text-center mb-5 md:mb-0">


                <div
                  className="mp-imageloader"
                  style={{
                    lineHeight: "400px",
                    verticalAlign: "middle",
                    display: "none",
                  }}
                >
                  <Image
                    src="https://assetsc2.urbandart.com/channels/2_v3/assetsl5/images/ll.gif"
                    alt="loading"
                    width={50}
                    height={50}
                  />
                </div>
                <Image
                  className="img-fluid mp-image"
                  src="https://cdn.urbandart.com/cdn-cgi/imagedelivery/2MNxgsuI8U0tpsuIsD_ASA/acbc282c-0862-476d-f2b4-5ab6a3b91c00/w=900,h=900,fit=cover"
                  alt="Pistachio Biscotti"
                  width={600}
                  height={600}
                  style={{ objectFit: "cover", maxWidth: "90%",  margin:"0px auto" }}
                />
              </div>

              {/* Right Content */}
              <div className="col-12 md:col-6 right shopping-content px-4 md:px-0 w-full md:w-1/2">
                <div className="w-100 product-summary prodpopinfo">
                  <div className="d-flex align-items-center my-3 flex-col md:flex-row">
                    <div className="flex-grow-1">
                      <div className="text-extra-dark-gray font-weight-500 text-extra-large alt-font margin-5px-bottom mp-title">
                        <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                          Pistachio Biscotti
                        </h2>
                      </div>
                      <del
                        className="popupstrikethru2 me-3"
                        id="popupstrikethru"
                        style={{ display: "none" }}
                      ></del>
                      <span className="product-price text-extra-medium">
                        ₹<span id="productprice">350</span>
                      </span>
                    </div>
                  </div>

                  <div className="last-paragraph-no-margin" id="productsummary">
                    <p>
                      Twice-baked Italian cookies loaded with pistachio. Contains egg. [8
                      pieces]
                    </p>
                  </div>

                  <div className="margin-five-top mt-10 mb-10">
  <div
    className="row margin-five-top flex sm:flex-row gap-3"
    id="modalfooteraddtocart"
  >
    <div className="col-4 sm:col-4 w-full sm:w-auto mb-2 sm:mb-0">
      <select
        className="custom-select custom-select-xs mb-2 p-2 b-st w-full"
        name="popup_qty"
        id="popup_qty"
      >
        {Array.from({ length: 10 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
    <div className="col-8 sm:col-8 w-full sm:w-auto">
      <button
        type="button"
        className="btn btn-medium btn-primary bg-blue p-2 b-st1 w-full sm:w-auto sm:ml-2"
      >
        Add to Bag
      </button>
    </div>
  </div>
</div>


                  <div className="d-flex alt-font margin-4-rem-top align-items-center flex-col md:flex-row justify-between">
                    <div className="text-end social-icon-style-02 w-full md:w-50 mt-3 md:mt-0">
                      <ul className="extra-small-icon flex justify-center md:justify-end gap-3">
                        <li>
                          <a
                            className="text-extra-dark-gray facebook"
                            href="https://www.facebook.com/sharer/sharer.php?u=%2Fp%2Fpistachio-biscotti__chrc8ugv9f"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-extra-dark-gray twitter"
                            href="http://twitter.com/share?text=&url=%2Fp%2Fpistachio-biscotti__chrc8ugv9f"
                            target="_blank"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-extra-dark-gray linkedin"
                            href="https://www.linkedin.com/cws/share?url=%2Fp%2Fpistachio-biscotti__chrc8ugv9f"
                            target="_blank"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-extra-dark-gray flickr"
                            href="http://pinterest.com/pin/create/button/?url=%2Fp%2Fpistachio-biscotti__chrc8ugv9f"
                            target="_blank"
                          >
                            <i className="fab fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedItemPage />
    </>
  );
};

export default Categories;
