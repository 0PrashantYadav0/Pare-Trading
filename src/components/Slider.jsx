import React from "react";
import recording from "../assets/recording.mov"
import tech1 from "../assets/tech1.avif"

export function VideoPlayer() {
  return (
    <>
      <video loop muted autoPlay poster={tech1} className="lg:h-[800px] xl:h-[1100px] border-y-2 border-black h-[400px] md:h-[600px]">
        <source src={recording}/>
      </video>
    </>
  );
}
