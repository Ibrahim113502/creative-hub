import React from "react";
import { PiGlobeLight } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

const services = [
  {
    title: "Software Development",
    icon: PiGlobeLight,
    sub: "Building scalable, and custom software solutions tailored to meet your unique business needs.",
  },
  {
    title: "Web Development",
    icon: PiGlobeLight,
    sub: "     Creating sleek, high-performance websites that drive engagement conversions, and brand credibility.",
  },
  {
    title: " Mobile Development",
    icon: CiMobile3,
    sub: "Designing powerful and user-friendly mobile apps that deliver smooth experiences across iOS and Android.",
  },
  {
    title: "AI Automation",
    icon: FaRobot,
    sub: " Empowering your operations with intelligent automation tools to increase efficiency and reduce manual effort.",
  },
];

const Service2 = [
  {
    title: "Digital Marketing",
    icon: MdCampaign,
    sub: "Boosting your online presence through data-driven strategies, SEO, social media, and targeted campaigns.",
  },
  {
    title: " Banner Design",
    icon: PiGlobeLight,
    sub: "Crafting eye-catching banners and visual content that capture attention and communicate your brand message.",
  },
  {
    title: "Video Editing",
    icon: PiGlobeLight,
    sub: "Delivering professionally edited videos that tell your story, promote your services, and captivate your audience.",
  },
];

function Service() {
  return (
    <div id="about" className="p-10">
      <h2 className="text-white">SERVICES</h2>
      <div className="mt-5">
        <span className="text-white text-4xl font-bold mission-text">
          Who We Do
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10 justify-center items-center">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden p-[2px] h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1200 z-0" />
              <div className="relative bg-[#1e1e1e] rounded-lg h-full w-full flex flex-col items-center justify-center text-center p-6 z-10">
                <Icon
                  size={40}
                  color="white"
                  className="mb-2 transition-all duration-300"
                />
                <span className="text-white text-2xl font-bold transition-all duration-300">
                  {item.title}
                </span>
                <span className="text-white text-sm font-light mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-1200 ease-in-out">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 align-middle justify-center mt-10 gap-20 px-24">
        {Service2.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden p-[2px] h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1200 z-0" />
              <div className="relative bg-[#1e1e1e] rounded-lg h-full w-full flex flex-col items-center justify-center text-center p-6 z-10">
                <Icon
                  size={40}
                  color="white"
                  className="mb-2 transition-all duration-300"
                />
                <span className="text-white text-2xl font-bold transition-all duration-300">
                  {item.title}
                </span>
                <span className="text-white text-sm font-light mt-4 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-1200 ease-in-out">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Service;
