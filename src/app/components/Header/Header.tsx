"use client";
import React, { memo } from "react";

function Header() {
  return (
    <div  className="flex justify-between p-6">
      <div className="">
        <span className="font-sans text-2xl text-white font-semibold">Creative Hub</span>
      </div>
      <div className='gap-4 flex pt-1.5 mt-0.5'>
        <div className="font-sans text-base text-white font-medium">Home</div>
        <div className="font-sans text-base text-white font-medium">About us</div>
        <div className="font-sans text-base text-white font-medium">Contact</div>
      </div>
    </div>
  );
}

export default memo(Header);
