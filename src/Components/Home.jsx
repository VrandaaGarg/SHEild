import React from "react";
import FAQs from "./FAQs";
import Team from "./Team";
import Features from "./Features";
import About from "./About";
import Landing from "./Landing";

function Home() {
  return (
    <div className="">
      <Landing />
      <About />
      <Features />
      <FAQs />
      <Team />
    </div>
  );
}

export default Home;
