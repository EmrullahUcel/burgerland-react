import React from "react";
import { motion } from "framer-motion";

// const svgVariants = {
//   hidden: { rotate: -180 },
//   visible: {
//     rotate: 0,
//     transition: { duration: 1 },
//   },
// };
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

const Footer = () => {
  return (
    <div className="w-full h-96 bg-lime-400 mt-20 flex justify-center">
     
    </div>
  );
};

export default Footer;
