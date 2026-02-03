import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Card from "../component/card";

const products = [
  {
    title: "Table",
    price: 250,
    code: "huaEf",
    imageLink: "images/hero.png",
  },
  {
    title: "Chair",
    price: 250,
    code: "huaEf",
    imageLink: "images/hero.png",
  },
  {
    title: "Desk",
    price: 250,
    code: "huaEf",
    imageLink: "images/hero.png",
  },
  {
    title: "Bench",
    price: 250,
    code: "huaEf",
    imageLink: "images/hero.png",
  },
  {
    title: "Bed",
    price: 250,
    code: "huaEf",
    imageLink: "images/hero.png",
  },
];

const quote = "Best furniture for sales..";
const data1 = "testing";
function Home() {
  return (
    <div className="bg-[#F2F0FF]">
      <div className="px-20">
        <Hero data={quote} />
      </div>
      <div className="px-20 grid grid-cols-4 gap-5">
        {products.map((el) => {
          return <Card data={el} />;
        })}
      </div>
    </div>
  );
}

export default Home;
