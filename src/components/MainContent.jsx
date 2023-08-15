import React, { useState, useEffect } from "react";

import Footer from "./mainContents/Footer";
import Cart from "./mainContents/carts/Cart";

const MainContent = () => {
  return (
    <div className="w-full flex flex-col h-screen  justify-center items-center">
      <Cart/>
      <Footer />
    </div>
  );
};

export default MainContent;
