import { NavLink, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const showInput = location.pathname === "/Burgers";
  const basket = useSelector((state) => state.burgers.basket);

  const basketQuantity = basket.reduce(
    (total, burger) => total + burger.quantity,
    0
  );
  console.log(basketQuantity);

  return (
    <div className="flex w-full h-24 bg-yellow-200 items-center justify-between">
      <div className="w-[60%] ml-[5%] flex">
        <NavLink
          activeClassName="active"
          className="mx-4 "
          to="/"
        >
          Ana Sayfa
        </NavLink>
        <NavLink className="mx-4" to="/Burgers">
          Burgerler
        </NavLink>
        <NavLink className="mx-4 w-28 flex items-center" to="/Basket">
          Sepet
          <SlBasket className="ml-3 " />
          <p className="bg-red-300 border-solid w-5 h-5 rounded-full flex justify-center items-center text-[13px] absolute ml-16 mb-5">
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
