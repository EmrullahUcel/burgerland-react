import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Menus from "/public/menus/Menus";
import { motion } from "framer-motion";
import slideVariants from "../variants/slideVariants";

const Cart = () => {
  const [menu, setMenu] = useState(Menus);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentMenuIndex + 1) % menu.length;
    setCurrentMenuIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentMenuIndex - 1 + menu.length) % menu.length;
    setCurrentMenuIndex(previousIndex);
  };

  const currentMenu = menu[currentMenuIndex];

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        variants={slideVariants}
        className="w-[90%] h-[70%] justify-center flex items-center mt-10"
      >
        <AiOutlineLeft
          onClick={handlePrevious}
          className="text-[60px] mt-20 cursor-pointer text-red-900"
        />
        <motion.div className="w-full h-full flex justify-start rounded-3xl items-center mt-24 bg-red-400">
          <img
            className="w-[70%] h-full rounded-bl-3xl rounded-tl-3xl"
            src={currentMenu.img}
            alt={currentMenu.title}
          />
          <motion.div
            className="h-full w-full flex flex-col justify-center items-center text-red-900 text-[30px] relative
        text-start  bg-[url('/src/images/burgir.png')] bg-contain bg-no-repeat bg-center
         after:content-[''] after:bg-red-300 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-80
         after:rounded-br-3xl after:rounded-tr-3xl transition-all "
          >
            <h1 className="text-[40px] z-20">{currentMenu.title}</h1>
            <p className="z-20">
              <p>{currentMenu.description}</p>
              <p>{currentMenu.price} ₺</p>
            </p>
          </motion.div>
        </motion.div>
        <AiOutlineRight
          onClick={handleNext}
          className="text-[60px] mt-20 cursor-pointer text-red-900"
        />
      </motion.div>
    </>
  );
};

export default Cart;
