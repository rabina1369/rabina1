import React from "react";

function Hero() {
  return (
    <div className="h-[70vh] bg-pink-200 flex justify-between">
        <div className="mx-40 mt-40">
      <div>
        <div>
          <span className="text-red-600">
            Best Furniture For Your Castle ...
          </span>
          <p className="font-bold text-5xl">
            New Furniture Collection Trends in 2026
          </p>
        </div>
        <div>
          <button className="bg-red-500 px-10 py-4 text-white ">
            Shop Now
          </button>
        </div>
        </div>
      </div>
      <div>
        <img src={"/images/hero.png"} className="'h-[400px]' aspect-square" />
      </div>
    </div>
  );
}

export default Hero;
