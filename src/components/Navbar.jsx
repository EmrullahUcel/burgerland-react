import { NavLink, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { GiHamburger } from "react-icons/gi";
import { BiHomeAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const showInput = location.pathname === "/Burgers";
  const basket = useSelector((state) => state.burgers.basket);

  const basketQuantity = basket.reduce(
    (total, burger) => total + burger.quantity,
    0
  );

  return (
    <div className="flex w-full h-24 items-center justify-between fixed z-10">
      <div className="absolute inset-0 bg-yellow-200 opacity-50 z-[-1]"></div>
      <div className="w-[60%] ml-[5%] flex items-center">
        <img src="/src/images/burgir.png" className="w-16 " alt="" />
        <NavLink
          activeClassName="active"
          className="mx-4 flex items-center h-10"
          to="/"
        >
          Ana Sayfa
          <BiHomeAlt2 className="absolute ml-20 mb-1" />
        </NavLink>
        <NavLink className="mx-4 flex items-center  h-10" to="/Burgers">
          Burgerler
          <GiHamburger className="text-amber-700 absolute ml-[70px] mb-1" />
        </NavLink>
        <NavLink className="mx-4 w-28 flex items-center  h-10" to="/Basket">
          Sepet
          <SlBasket className="ml-12 mb-1 text-red-600 absolute " />
          <p className="text-[13px] absolute ml-[60px] mb-5">
            {basketQuantity}
          </p>
        </NavLink>
      </div>
      <div
        className={`w-[30%] flex justify-center ${showInput ? "" : "hidden"}`}
      >
        <input
          className="w-72 border border-solid rounded-3xl pl-6"
          placeholder="Burger ara"
        />
      </div>
    </div>
  );
};

export default Navbar;
