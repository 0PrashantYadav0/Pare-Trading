import React from "react";
import recording from "../assets/recording.mov"

export function VideoPlayer() {
  return (
    <>
      <video loop muted autoPlay className="h-[600px] border-y-2 border-black">
        <source src={recording}/>
      </video>
    </>
  );
}
