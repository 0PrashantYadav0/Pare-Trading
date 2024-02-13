import React from "react";
import LogoP from "../components/Logo";

function ContactUs() {
  return (
    <section className="text-gray-600 body-font relative bg-gradient-to-b from-blue-gray-50 via-blue-gray-200 to-blue-gray-400">
      <div className="flex justify-center gap-6 md:gap-8 pt-12">
      <LogoP />
        <h1 className="text-xl title-font text-center text-red-700 font-bold sm:text-4xl">
          PARE TRADING CO.
        </h1>
      </div>
      <div className="pt-4 text-center">
        <p>Everything in : Electricals, Hardware & Engg.</p>
        <p>Mfg. Representative, Supplier & Stockist:</p>
        <p>
          Specialist in: Silvertip, Contacts, Brass & Copper Contacts, Silver
          <br />
          Coated Contacts, Carbon Brushes, Brush Holders to your specifications
        </p>
        <p className="font-medium text-xl pt-4">
          If you w contact us here is Information
        </p>
      </div>
      <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-[1000px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4086.778008246474!2d72.82756334372489!3d18.946500885415237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce21a4adeb9b%3A0x7d17a2c3541c92c7!2sVishwanath%20Building%2C%20Kantilal%20M%20Sharma%20St%2C%20Lohar%20Chawl%2C%20Kalbadevi%2C%20Mumbai%2C%20Maharashtra%20400002!5e0!3m2!1sen!2sin!4v1706099319859!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-[800px] absolute inset-0"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="flex max-md:flex-wrap w-full">
              <div className=" w-full p-4 text-center">
                <span className="text-gray-600 font-medium">Email: </span>
                <a className="text-indigo-500">s.shah1976@yahoo.co.in</a>
                <br />
                <span className="text-gray-600 font-medium">Website: </span>
                <a className="text-indigo-500 cursor-pointer" href="https://pare-trading.vercel.app/">https://pare-trading.vercel.app</a>
                <div>
                  <span className="text-gray-600 font-medium">
                    Name: Shaishav Shah{" "}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">
                    Phone Number: +91-9833115541{" "}
                  </span>
                </div>
                <p className="leading-normal my-5">
                  <p>M/S PARE TRADING CO,</p>
                  <p>MR SHAISHAV SHAH.</p>
                  <p>166/172, LOHAR CHAWL, 4/1 , VISHWANATH BLDG, K.M.SHARMA MARG,MUMBAI 400 002, INDIA.</p>
                  <p>OFF NO - 022 31685488 <br /> CELL NO - 09833115541 </p>
                  <p>G.S.T. NUMBER : 27AYOPS9406Q1Z9</p>
                  <p>M.S.M.E. NUMBER : MH19D0078147</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
