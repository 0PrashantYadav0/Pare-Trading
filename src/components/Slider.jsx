import React from "react";
import recording from "../assets/recording.mov"
import tech1 from "../assets/tech1.avif"

export function VideoPlayer() {
  return (
    <>
      <video loop muted autoPlay poster={tech1} className="lg:h-[700px] border-y-2 border-black sm:h-[500px] h-[400px] md:h-[600px]">
        <source src={recording}/>
      </video>
    </>
  );
}
