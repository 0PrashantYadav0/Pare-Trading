import React from "react";
import recording from "../assets/recording.mov"
import tech1 from "../assets/tech1.avif"

export function VideoPlayer() {
  return (
    <>
      <video src={recording} type="video/mov" loop muted autoPlay className="lg:h-[600px] border-y-2 border-black sm:h-[500px] h-[400px] md:h-[600px]">
      </video>
    </>
  );
}
