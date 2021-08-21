import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const colors = [
  "https://ik.imagekit.io/w16cqmxhb/catalog/brandstore/kkclmultibrand/homepage-banner-2.jpg",
  "https://i01.appmifile.com/webfile/globalimg/0320/TO-B/New-Product-Banner/Mi-11i-banner-en-PC.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/OnePlus/OnePlus6T/PriceDrop/D9867094_IN_WLME_OnePlus_PriceDrop_NewKV_PC_LP_1500x600._CB465812565_.jpg",
];
const delay = 2000;

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div>
      <div>
        <img className="slide-images" src={colors[index]} alt="img" />
      </div>
      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default Slider;
