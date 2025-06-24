"use client";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React, { useRef } from "react";

function Master({ aboutRef }: { aboutRef: React.RefObject<HTMLDivElement> }) {
  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white h-100 w-full justify-center align-middle flex">
      <div className="flex flex-col">
          {/* <div className="flex flex-col align-middle justify-center">
          <div className="h-[8rem] flex items-center justify-center">
            <h2 className="text-8xl font-bold">CREATIVE</h2>
            <TextHoverEffect text="HUB" className=" font-bold mt-[25px]" />
          </div>
          <h2 className="text-8xl font-bold">
            {" "}
            <ColourfulText text="TECHNOLOGIES" />
          </h2>
        </div> */}
        <div className="h-[8rem] flex items-center justify-center">
          <h2 className="text-8xl">CREATIVE</h2>
          <TextHoverEffect text="HUB" className="mt-[25px] ml-[-21px]" />
        </div>
        <h2 className="text-8xl">TECHNOLOGIES</h2>
        <span className="pt-8 justify-center align-middle flex text-2xl gap-3">
          Innovative Solution For your
          <PointerHighlight>
            <span className=" p-3">business</span>
          </PointerHighlight>
          {/* Innovative Solution For your business */}
        </span>

        <div className="pt-8 justify-center align-middle flex text-2xl">
          <Button onClick={handleScroll}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Master;
