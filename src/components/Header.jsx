// import React from "react";
import { IoIosArrowDown } from "react-icons/io";


function Header() {
  return (
    <>
      <div className="flex justify-center pt-1 h-[70px] border-b-[1px] border-b-gray-500 bg-transparent">
        <div className="flex mr-12 justify-center items-center gap-0">
          <img
            className="w-[35px] h-[35px]"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/favicon-default-6cbad9de243dbae3.ico"
            alt=""
          />

          <img
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-wordmark-monochrome-e642ddf3.svg"
            alt=""
            className="bg-black w-[90px] h-[50px]"
          />
        </div>

        <div className="flex gap-[540px] justify-center items-center">
          <div className="flex gap-7 ">
            <div>
              <a className="flex items-center justify-center gap-2" href="#">
                Solutions
                <div className="pt-1">
                  <IoIosArrowDown />
                </div>
              </a>
            </div>

            <div>
              <a href="#">Pricing</a>
            </div>

            <div>
              <a className="flex items-center justify-center gap-2" href="#">
                Resources
                <div className="pt-1">
                  <IoIosArrowDown />
                </div>
              </a>
            </div>

            <div>
              <a className="flex items-center justify-center gap-2" href="#">
                What&apos;s New
                <div className="pt-1">
                  <IoIosArrowDown />
                </div>
              </a>
            </div>
          </div>

          <div className="flex gap-10 justify-center items-center">
            <div>
              <a href="#">Log in</a>
            </div>

            <div>
              <button className="border-2 p-2 pl-4 pr-4 rounded-3xl bg-black text-white font-semibold">
                Start Free Trail
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center pt-1 h-[70px] border-b-[1px] border-b-gray-500 gap-6 bg-transparent">
        <div className="font-semibold ml-[90px]">
          <span>Point of Sale</span>
        </div>

        <div>
          <a href="">Retail POS</a>
        </div>

        <div className="">
          <a className="flex items-center justify-center gap-2" href="#">
            Features
          <div className="pt-1">
            <IoIosArrowDown />
          </div>
          </a>
        </div>

        <div>
          <a href="">POS Pricing</a>
        </div>
      </div>
    </>
  );
}

export default Header;
