import React from "react";
import CommonHead from "../common/CommonHead";
import HeroSection from "../modules/LandingModule/HeroSection";

const Landing = () => {
  return (
    <main>
      <CommonHead title={"Restaurant"} />
      <HeroSection />
      <div className={"dynamic-x-padding"}>
        {/* <WhyBookSection />
        <ItsComing /> */}
      </div>
    </main>
  );
};

export default Landing;
