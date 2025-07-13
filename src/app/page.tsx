"use client";
import AboutPage from "./components/About Page/about";
import Header from "./components/Header";
import Master from "./components/Master";
import React, { useRef } from "react";
import Service from "./components/Service Page";
import ClientPage from "./components/Client Page";
import Footer from "./components/Footer Page";


export default function Home() {
  const aboutRef = useRef<any>(null);

  return (
    <div className="bg-black">
      {/* <Pointer /> */}
      <Header />
      <Master aboutRef={aboutRef} />
      <AboutPage ref={aboutRef} />
      <Service/>
      {/* <ProductShowcase/> */}
      <ClientPage/>
      <Footer/>
    </div>
  );
}
