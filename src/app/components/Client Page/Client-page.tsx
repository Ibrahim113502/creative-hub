import React from "react";
import TestimonialSlider from "@/components/ui/test-monial-slider";

function ClientPage() {
  return (
    <div id="about" className="p-10">
      {/* <h2 className="text-white">CLIENTS</h2>
      <div className="mt-5">
        <span className="text-white text-4xl font-bold mission-text">
          Our Clients
        </span>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-800 to-white bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why businesses trust us with their success stories
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default ClientPage;
