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
      
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">SWITCHGEAR PRODUCTS :</p>
        <img
          src={lt}
          alt="image 3"
          className="h-1/2 w-1/2 object-cover aspect-square"
        />
        <img
          src={ABB}
          alt="image 1"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={schneider}
          alt="image 2"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={seimens}
          alt="image 3"
          className="h-1/2 w-1/2 object-cover aspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold"> CABLES & WIRES PRODUCTS :</p>
        <img
          src={polycab}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
         <img
          src={finolex}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={ccoi}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={rr}
          alt="image 1"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">LIGHTING & FIXTURES :</p>
        <img
          src={bajaj}
          alt="image 2"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={wipro}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
         <img
          src={philips}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={osram}
          alt="image 1"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">SWITCHES & AUTOMATION :</p>
        <img
          src={legrand}
          alt="image 2"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={chipsal}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={honeywell}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={anchor}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold"> CIRCUIT BREAKER & TIMERS & CONTROLLER :</p>
        <img
          src={indoasian}
          alt="image 1"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={eapl}
          alt="image 2"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={select}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={hager}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
      </div>
      {/* <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">SILVERTIP CONTACTS AND SILVER COATED CONTACTS :</p>
        <img
          src={img1}
          alt="image 3"
          className="h-full w-full  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">BRASS & COPPER CONTACTS :</p>
        <img
          src={img2}
          alt="image 3"
          className="h-full w-full  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">CARBON BRUSHES & BRUSH HOLDERS : </p>
        <img
          src={img3}
          alt="image 3"
          className="h-full w-full  object-coveraspect-square"
        />
      </div>
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold">EARTHING PRODUCTS : </p>
        <img
          src={img4}
          alt="image 3"
          className="h-full w-full  object-coveraspect-square"
        />
      </div> */}
      <div className="sm:h-[600px] h-[500px] p-1 w-full flex flex-wrap  justify-center items-center overflow-hidden">
        <p className="w-full md:text-2xl text-md text-center font-bold"> LED LIGHTING :</p>
        <img
          src={blub}
          alt="image 1"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={downligth}
          alt="image 2"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={roofligth}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
        <img
          src={leddrivers}
          alt="image 3"
          className="h-1/2 w-1/2  object-coveraspect-square"
        />
      </div>
    </Carousel>
  );
}
