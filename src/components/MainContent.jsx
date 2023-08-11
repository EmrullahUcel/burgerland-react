import React, { useState, useEffect } from "react";
import Kasap from "/src/images/kasap_burger.jfif";

const products = [
  {
    id: 1,
    title: "Kasap Burger",
    description: "200gr Burger Köftesi ,Marul,Karamelize soğan,Turşu,Ketçap",
    price: 79,
    img: "kasap_burger",
  },
  {
    id: 2,
    title: "Cheese Burger",
    description: "180 gr Burger Köftesi Marul, Soğan,Turşu, Cheedar Peyniri",
    price: 69,
    img: "cheese_burger",
  },
  {
    id: 3,
    title: "Mushroom Burger",
    description:
      "180 gr Burger Köftesi , Marul, Karamelize Soğan, Turşu, Mantar",
    price: 74,
    img: "mantar_burger",
  },
];

const MainContent = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentProduct = products[currentProductIndex];

  return (
    <div className="w-full flex h-[calc(100vh-96px)] items-center justify-between">
      <img src="/src/images/burgir.png " className="w-80 -h-[420px] ml-[5%]" />
      <img
        src={`/src/images/${currentProduct.img}.jfif`}
        className="w-[208] h-32 "
        alt={currentProduct.title}
      />
      <div className="mr-[5%] ">
        <h1>{currentProduct.title}</h1>
        <p>{currentProduct.description}</p>
        <p>{currentProduct.price} ₺</p>
      </div>
    </div>
  );
};

export default MainContent;
