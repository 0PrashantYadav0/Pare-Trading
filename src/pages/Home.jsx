import React from "react";
import LogoP from "../components/Logo";
import { Link } from "react-router-dom";
import { GoPlug } from "react-icons/go";
import { MdOutlineCable } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";
import { RxSwitch } from "react-icons/rx";
import { GiCircuitry } from "react-icons/gi";
import { MdOutlineLight } from "react-icons/md";
import rr from "../assets/rr.webp";
import wipro from "../assets/wipro.png";
import legrand from "../assets/legrand.jpeg";
import eapl from "../assets/eapl.png";
import ABB from "../assets/ABB.jpeg";
import roofligth from "../assets/roofligth.jpeg";
import { VideoPlayer } from "../components/Slider";

function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-gray-50 via-blue-gray-200 to-blue-gray-400">
      <div className="rounded-xl flex justify-center">
        <VideoPlayer />
      </div>
      <div className="flex justify-center gap-6 md:gap-8 pt-12 ">
        <LogoP />
        <h1 className="text-xl title-font text-center text-red-700 font-bold sm:text-4xl">
          PARE TRADING CO.
        </h1>
      </div>
      <div className="bg-gradient-to-b from-blue-gray-50 via-blue-gray-200 to-blue-gray-400 pb-24">
        <section class="text-gray-900 body-font bg-gradient-to-b from-blue-gray-500 via-blue-gray-400 to-blue-gray-200">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-3xl font-bold title-font mb-2 text-gray-900">
                List of few Products :
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-blue-900">
                Want to know more <Link to={"/products"}>click here.....</Link>
              </p>
            </div>
            <div class="flex flex-wrap -m-4 justify-between">
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <GoPlug className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    SWITCHGEAR PRODUCTS
                  </p>
                  <img src={ABB} alt="" className=" w-full aspect-square" />
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <MdOutlineCable className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    CABLES & WIRES PRODUCTS
                  </p>
                  <img src={rr} alt="" className=" w-full aspect-square" />
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <FaLightbulb className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    LIGHTING & FIXTURES
                  </p>
                  <img src={wipro} alt="" className="w-full aspect-square" />
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black  bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <RxSwitch className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    SWITCHES & AUTOMATION
                  </p>
                  <img src={legrand} alt="" className=" w-full aspect-square" />
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <GiCircuitry className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    CIRCUIT BREAKER :
                  </p>
                  <img src={eapl} alt="" className=" w-full aspect-square" />
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
                <div class="border-2 border-black bg-blue-gray-100 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <MdOutlineLight className="w-8 h-6" />
                  </div>
                  <p class="text-lg text-gray-900 font-medium title-font mb-2">
                    LED LIGHTING
                  </p>
                  <img
                    src={roofligth}
                    alt=""
                    className=" w-full aspect-square"
                  />
                </div>
              </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link to={"/products"}>Learn More</Link>
            </button>
          </div>
        </section>
        <section class="text-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-900 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                {" "}
                All electrical accessories provided by M/S PARE TRADING CO are
                the latest STATE-OF-THE-ART technologies. In this specialist
                market we pride ourselves on providing top level electrical
                product to our customers and we are highly competitive on price.
                We are well known for our unmatched customer service and for the
                quality of products that we use for our customers.
              </p>
              <Link
                to={"/about"}
                class="text-blue-900 font-medium title-font tracking-wider text-sm py-1"
              >
                Read More --
              </Link>
            </div>
          </div>
        </section>
        <section class="text-whitebody-font bg-gray-900 rounded-3xl mx-12">
          <div class="container px-5 py-12">
            <div class="lg:w-full flex flex-col sm:flex-row sm:items-center items-start">
              <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                Unlock communication excellence with a simple click – press the
                button to embark on a seamless journey to connect with us.
              </h1>
              <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                <Link to="/contact-us">Click Here</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
