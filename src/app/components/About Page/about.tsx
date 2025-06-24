"use client";
import React, { forwardRef } from "react";

const AboutPage = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="about" className="p-10">
      <h2 className="text-white">ABOUT US</h2>
      <div className="mt-5">
      <span className="text-white text-4xl font-bold mission-text">Who We Are</span>
      </div>
      <div className="grid grid-cols-2 align-middle justify-center mt-10 gap-20">
        <div>
          <span className="text-2xl text-white">Our Mission</span>
          <h2 className="text-white text-xl mr-10 mt-3">
            {" "}
            We help businesses grow with smart digital solutions. Our goal is to build reliable, easy-to-use technology that fits your needs and makes your work better and faster.
          </h2>
        </div>
        <div>
          <h2 className="text-2xl text-white">Our Vision</h2>
          <h2 className="text-white text-xl mr-4 mt-3">
            {" "}
            We aim to be a top tech partner for businesses around the world—bringing new ideas, smart digital changes, and solutions that help you grow for the long term.
          </h2>
        </div>
      </div>
    </div>
  );
});

export default AboutPage;
