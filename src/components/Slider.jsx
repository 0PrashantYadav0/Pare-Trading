import React from "react";
import recording from "../assets/recording.mov"
import tech1 from "../assets/tech1.avif"

export function VideoPlayer() {
  return (
    <>
      <video loop muted autoPlay poster={tech1} className="h-[600px] border-y-2 border-black">
        <source src={recording}/>
      </video>
    </>
  );
}
