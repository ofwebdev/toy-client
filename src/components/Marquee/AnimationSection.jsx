import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialSection from "./TestimonialSection";

function AnimationSection() {
  return (
    <div>
      <Marquee>
        <TestimonialSection />
      </Marquee>
    </div>
  );
}

export default AnimationSection;
