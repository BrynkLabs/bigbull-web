import About from "@/components/home/About";
import Gallary from "@/components/home/Gallary";
import Hero from "@/components/home/Hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero/>  
      <About/>
      <Gallary/>
    </React.Fragment>
  );
}
