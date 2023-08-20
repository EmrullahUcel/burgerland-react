import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Menus from "/public/menus/Menus";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
};
const pathVariant1 = {
  hidden: { y: -200 },
  visible: { y: 30, transition: { duration: 1.8 } },
};
const pathVariant2 = {
  hidden: { y: -150 },
  visible: { y: 15, transition: { duration: 1.3 } },
};
const pathVariant3 = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.7 } },
};

Modal.setAppElement("#root");

const Cart = () => {
  const [menu, setMenu] = useState(Menus);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const handleNext = () => {
    const nextIndex = (currentMenuIndex + 1) % menu.length;
    setCurrentMenuIndex(nextIndex);
    setLoading(true);
  };

  const handlePrevious = () => {
    const previousIndex = (currentMenuIndex - 1 + menu.length) % menu.length;
    setCurrentMenuIndex(previousIndex);
    setLoading(true);
  };

  const currentMenu = menu[currentMenuIndex];
  const cartVariants = {
    initial: {
      x: "50%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(delay);
    };
  }, [currentMenuIndex]);

  return (
    <AnimatePresence>
      <motion.div
        key={currentMenuIndex}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        variants={cartVariants}
        className="w-[90%] h-[70%] justify-center flex items-center mt-10"
      >
        <AiOutlineLeft
          onClick={handlePrevious}
          className="text-[60px] mt-20 cursor-pointer text-red-900"
        />
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          variants={cartVariants}
          className="w-full h-full flex justify-start rounded-3xl items-center mt-24 bg-red-400"
        >
          <img
            className="w-[70%] h-full rounded-bl-3xl rounded-tl-3xl"
            src={currentMenu.img}
            alt={currentMenu.title}
          />
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            variants={cartVariants}
            className="h-full w-full flex flex-col justify-center items-center text-red-900 text-[30px] relative
              text-start  bg-[url('/src/images/burgir.png')] bg-contain bg-no-repeat bg-center
               after:content-[''] after:bg-red-300 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-80
                after:rounded-br-3xl after:rounded-tr-3xl transition-all "
          >
            <h1 className="text-[40px] z-20">{currentMenu.title}</h1>
            <div className="z-20">
              <p>{currentMenu.description}</p>
              <p>{currentMenu.price} ₺</p>
            </div>
          </motion.div>
        </motion.div>
        <AiOutlineRight
          onClick={handleNext}
          className="text-[60px] mt-20 cursor-pointer text-red-900"
        />
      </motion.div>
      {isLoading && (
        <Modal isOpen={true} style={customStyles} contentLabel="Loading Modal">
          <motion.svg
            fill="#000000"
            height="80px"
            width="80px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 269.988 269.988"
            xml:space="preserve"
          >
            <g id="XMLID_105_">
              <motion.path
                variants={pathVariant3}
                initial="hidden"
                animate="visible"
                id="XMLID_106_"
                d="M64.994,239.913h140c19.299,0,35-15.701,35-35v-14.977h-210v14.977
		C29.994,224.212,45.695,239.913,64.994,239.913z"
              />
              <motion.path
                variants={pathVariant2}
                initial="hidden"
                animate="visible"
                id="XMLID_107_"
                d="M14.76,159.925c0.078-0.001,0.155-0.012,0.234-0.012h240c0.079,0,0.155,0.011,0.234,0.012
		c8.158-0.124,14.76-6.804,14.76-15.01c0-8.259-6.724-14.979-14.988-14.979H14.987C6.723,129.937,0,136.656,0,144.915
		C0,153.121,6.602,159.802,14.76,159.925z"
              />
              <motion.path
                variants={pathVariant1}
                initial="hidden"
                animate="visible"
                id="XMLID_108_"
                d="M211.067,53.404c-20.11-15.044-47.084-23.329-75.952-23.329c-28.871,0-55.848,8.285-75.959,23.33
		C41.989,66.246,31.861,82.61,30.223,99.937H240C238.361,82.61,228.234,66.246,211.067,53.404z"
              />
            </g>
          </motion.svg>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default Cart;
