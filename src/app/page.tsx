import About from "@/components/home/About";
import Article from "@/components/home/Article";
import Gallary from "@/components/home/Gallary";
import Hero from "@/components/home/Hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero/>  
      <About/>
      <Article/>    
      <Gallary/>
    </React.Fragment>
  );
}
