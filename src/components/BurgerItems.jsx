import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../slice/sliceFolder/BurgerSlice";
import slideVariants from "./mainContents/variants/slideVariants";
import { motion } from "framer-motion";
const BurgerItems = () => {
  const burgersData = useSelector((state) => state.burgers.burgersData);
  const basket = useSelector((state) => state.burgers.basket);
  const dispatch = useDispatch();

  const isItemInBasket = (burger) => {
    return basket.some((item) => item.id === burger.id);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      variants={slideVariants}
      className="flex flex-wrap justify-center ml-[20%] mr-[20%] mt-32"
    >
      {burgersData.map((burger) => (
        <div
          className="shadow-2xl mx-5 my-4 w-52 h-72 text-center relative"
          key={burger.id}
        >
          <img className="w-full h-32" src={burger.image} alt={burger.title} />
          <h1>{burger.title}</h1>
          <p>{burger.description}</p>
          <p>{burger.price} ₺</p>
          <button
            disabled={isItemInBasket(burger)}
            className={`border border-blue-400 absolute bottom-[5%] left-[30%] ${
              isItemInBasket(burger) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => dispatch(addToBasket(burger))}
          >
            Sepete ekle
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default BurgerItems;
