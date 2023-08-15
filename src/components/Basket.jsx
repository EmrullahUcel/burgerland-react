import { useSelector, useDispatch } from "react-redux";
import slideVariants from "./mainContents/variants/slideVariants";
import { motion } from "framer-motion";
import {
  deleteBurger,
  increment,
  decrement,
  removeBasket,
} from "../slice/sliceFolder/BurgerSlice";

const Basket = () => {
  const basketBurgers = useSelector((state) => state.burgers.basket);
  const dispatch = useDispatch();
  const totalprice = basketBurgers.reduce(
    (total, burger) => total + burger.price * burger.quantity,
    0
  );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      variants={slideVariants}
      className="flex flex-wrap"
    >
      {totalprice}
      {basketBurgers.map((burger) => {
        return (
          <motion.div
            key={burger.id}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            variants={slideVariants}
            className="shadow-2xl mx-5 my-4 w-52 h-96 text-center relative "
          >
            <img
              className="w-full h-32"
              src={burger.image}
              alt={burger.title}
            />
            <h1>{burger.title}</h1>
            <p>{burger.description}</p>
            <p>{burger.price * burger.quantity} ₺</p>
            <button
              className="mx-2"
              onClick={() => dispatch(decrement(burger))}
            >
              -
            </button>
            <span>{burger.quantity}</span>
            <button
              className="mx-2"
              onClick={() => dispatch(increment(burger))}
            >
              +
            </button>
            <button
              onClick={() => dispatch(deleteBurger(burger))}
              className="border border-blue-400 absolute bottom-[5%] left-[30%]"
            >
              Sepetten çıkar
            </button>
          </motion.div>
        );
      })}
      <button onClick={() => dispatch(removeBasket())}>sepeti boşalt</button>
    </motion.div>
  );
};

export default Basket;
