import React from "react";
import video from "../assets/video.mov"

export function VideoPlayer() {
  return (
    <>
      <video src={video} type="video/mov" loop muted autoPlay className="lg:h-[600px] border-2 border-black sm:h-[500px] h-[400px] md:h-[600px]">
      </video>
    </>
  );
}
