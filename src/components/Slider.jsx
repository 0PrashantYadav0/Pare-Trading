import { Carousel } from "@material-tailwind/react";
import lt from "../assets/lt.jpeg";
import seimens from "../assets/seimens.jpg";
import ABB from "../assets/ABB.jpeg";
import schneider from "../assets/schneider.jpeg";
import chipsal from "../assets/clipsal.png";
import legrand from "../assets/legrand.jpeg";
import honeywell from "../assets/honeywell.jpeg";
import anchor from "../assets/anchor.png";
import eapl from "../assets/eapl.png";
import hager from "../assets/hager.jpeg";
import select from "../assets/select.jpeg";
import indoasian from "../assets/indoasiaan.png";
import polycab from "../assets/polycab.webp";
import finolex from "../assets/finolex.webp";
import ccoi from "../assets/ccoi.jpeg";
import rr from "../assets/rr.webp";
import osram from "../assets/osram.webp";
import wipro from "../assets/wipro.png";
import bajaj from "../assets/bajaj.png";
import philips from "../assets/philips.png";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
import blub from "../assets/blub.jpeg";
import roofligth from "../assets/roofligth.jpeg";
import leddrivers from "../assets/leddrivers.jpeg";
import downligth from "../assets/downligth.jpeg";

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 0.2 }}
      className="rounded-xl"
      loop={true}
      autoplay={true}
    >
      
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4">SWITCHGEAR PRODUCTS :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={lt}
          alt="image 3"
          className="h-1/2 w-1/2 lg:object-cover"
        />
        <img
          src={ABB}
          alt="image 1"
          className="h-1/2 w-1/2 lg:object-contain bg-white"
        />
        <img
          src={schneider}
          alt="image 2"
          className="h-1/2 w-1/2 lg:object-cover"
        />
        <img
          src={seimens}
          alt="image 3"
          className="h-1/2 w-1/2 lg:object-cover"
        />
        </div>
      </div>
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4"> CABLES & WIRES PRODUCTS :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={polycab}
          alt="image 3"
          className="h-1/2 w-1/2 object-contain bg-white"
        />
         <img
          src={finolex}
          alt="image 3"
          className="h-1/2 w-1/2 lg:object-contain bg-white"
        />
        <img
          src={ccoi}
          alt="image 3"
          className="h-1/2 w-1/2 lg:object-contain bg-white"
        />
        <img
          src={rr}
          alt="image 1"
          className="h-1/2 w-1/2 lg:object-contain bg-white"
        />
        </div>
      </div>
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4">LIGHTING & FIXTURES :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={bajaj}
          alt="image 2"
          className="h-1/2 w-1/2 p-4 object-contain bg-white"
        />
        <img
          src={wipro}
          alt="image 3"
          className="h-1/2 w-1/2 p-4 object-contain bg-white"
        />
         <img
          src={philips}
          alt="image 3"
          className="h-1/2 w-1/2 p-4 object-contain bg-white pb-4"
        />
        <img
          src={osram}
          alt="image 1"
          className="h-1/2 w-1/2 p-4 object-contain bg-white pb-4"
        />
        </div>
      </div>
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4">SWITCHES & AUTOMATION :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={legrand}
          alt="image 2"
          className="h-1/2 w-1/2 object-contain bg-white "
        />
        <img
          src={chipsal}
          alt="image 3"
          className="h-1/2 w-1/2 object-contain bg-white"
        />
        <img
          src={honeywell}
          alt="image 3"
          className="h-1/2 w-1/2 object-contain bg-white pb-8"
        />
        <img
          src={anchor}
          alt="image 3"
          className="h-1/2 w-1/2 object-contain bg-white"
        />
        </div>
      </div>
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4"> CIRCUIT BREAKER & TIMERS & CONTROLLER :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={indoasian}
          alt="image 1"
          className="h-1/2 w-1/2  object-contain bg-white"
        />
        <img
          src={eapl}
          alt="image 2"
          className="h-1/2 w-1/2  object-contain bg-white"
        />
        <img
          src={select}
          alt="image 3"
          className="h-1/2 w-1/2  object-contain bg-white"
        />
        <img
          src={hager}
          alt="image 3"
          className="h-1/2 w-1/2  object-contain bg-white"
        />
        </div>
      </div>
      <div>
        <p className="w-full md:text-2xl text-md text-center font-bold py-4"> LED LIGHTING :</p>
        <div className="lg:h-[600px] md:h-[500px] h-[400px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <img
          src={blub}
          alt="image 1"
          className="h-1/2 w-1/2  object-contain bg-[#ffffff]"
        />
        <img
          src={downligth}
          alt="image 2"
          className="h-1/2 w-1/2  object-contain bg-[#e3e3e3]"
        />
        <img
          src={roofligth}
          alt="image 3"
          className="h-1/2 w-1/2  object-contain bg-[#e4e2e5]"
        />
        <img
          src={leddrivers}
          alt="image 3"
          className="h-1/2 w-1/2  object-contain bg-white"
        />
        </div>
      </div>
    </Carousel>
  );
}
