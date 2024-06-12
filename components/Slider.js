import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className="w-8/12 container mx-auto mt-10">
      <Slider
        asNavFor={nav2}
        ref={sliderRef1}
        arrows={false}
        infinite={true}
      >
        <div>
          <img src="/home/sake_bowl.png" className="w-full h-96 rounded-3xl" alt="" />
        </div>
        <div>
          <img src="/home/tiputrek.jpg" className="w-full h-96 rounded-3xl" alt="" />
        </div>
        <div>
          <img src="/home/barCrawl.jpg" className="w-full h-96 rounded-3xl" alt="" />
        </div>
        <div>
          <img src="/home/history.jpg" className="w-full h-96 rounded-3xl" alt="" />
        </div>
      </Slider>
      
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="mt-4"
        infinite={true}
      >
        <div className="pr-4">
          <img src="/home/sake_bowl.png" className="w-96 h-48 rounded-3xl" alt="" />
        </div>
        <div className="pr-4">
          <img src="/home/tiputrek.jpg" className="w-96 h-48 rounded-3xl" alt="" />
        </div>
        <div className="pr-4">
          <img src="/home/barCrawl.jpg" className="w-96 h-48 rounded-3xl" alt="" />
        </div>
        <div className="pr-4">
          <img src="/home/history.jpg" className="w-96 h-48 rounded-3xl" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AsNavFor;
