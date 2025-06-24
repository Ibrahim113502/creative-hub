"use client";
import AboutPage from "./components/About Page/about";
import Header from "./components/Header";
import Master from "./components/Master";
import React, { useRef } from "react";
import Service from "./components/Service Page";
import ClientPage from "./components/Client Page";
import { Pointer } from "@/components/magicui/pointer";


export default function Home() {
  const aboutRef = useRef<any>(null);

  return (
    <div className="bg-black">
      <Pointer />
      <Header />
      <Master aboutRef={aboutRef} />
      <AboutPage ref={aboutRef} />
      <Service/>
      <ClientPage/>
    </div>
  );
}
