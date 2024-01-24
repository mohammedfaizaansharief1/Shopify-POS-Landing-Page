// import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  return (
    <>
      <div className="flex justify-center pt-5 h-[120px] border b-b-2">

        <div className="flex">
          <img
            className="w-[60px] h-[50px]"
            src="https://cdn.shopify.com/shopifycloud/web/assets/v1/favicon-default-6cbad9de243dbae3.ico" 
            alt=""
          />

          <img src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-wordmark-monochrome-e642ddf3.svg" alt="" className="bg-black" />
        </div>

        <div className="flex gap-[550px] justify-center items-center">

          <div className="flex gap-6 ">

            <div>
              <a className="flex" href="#">
                Solutions <IoIosArrowDown />
              </a>
            </div>
            
            <div>
              <a href="#">Pricing</a>
            </div>

            <div>
              <a href="#" className="flex">
                Resources <IoIosArrowDown />
              </a>
            </div>

            <div>
              <a href="#" className="flex">
                What&apos;s New <IoIosArrowDown />
              </a>
            </div>

          </div>

          <div className="flex gap-10">

            <div>
              <a href="#">Login</a>
            </div>

            <div>
              <button className="border-2 p-2 pl-4 pr-4 rounded-3xl bg-black text-white">Start Free Trail</button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Header;
