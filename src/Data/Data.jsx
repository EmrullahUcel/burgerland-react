import "../Data/Data.css";
import Kasap from "../images/burger.jpg";
import CheeseBurger from "../images/cheese_burger.jfif";
import MushroomBurger from "../images/mantar_burger.jfif";
import ChickenBurger from "../images/tavuk_burger.jfif";
import DoubleBurger from "../images/double_burger.jfif";
import DoubgleCheeseBurger from "../images/doublecheese_burger.jfif";

const Data = [
  {
    id: 1,
    title: "Kasap Burger",
    description: " 200gr Burger Köftesi ,Marul,Karamelize soğan,Turşu,Ketçap ",
    image: Kasap,
    price: 79 + "TL",
  },
  {
    id: 2,
    title: "Cheese Burger",
    description: " 180 gr Burger Köftesi Marul, Soğan,Turşu, Cheedar Peyniri",
    image: CheeseBurger,
    price: 69 + "TL",
  },
  {
    id: 3,
    title: "Mushroom Burger",
    description:
      " 180 gr Burger Köftesi , Marul, Karamelize Soğan, Turşu, Mantar",
    image: MushroomBurger,
    price: 74 + "TL",
  },
  {
    id: 4,
    title: "Chicken Burger",
    description: "200gr Tavuk Burger , Marul, Karamelize Soğan, Turşu, Ketçap",
    image: ChickenBurger,
    price: 55 + "TL",
  },
  {
    id: 5,
    title: "Double Burger",
    description: "400 gr Kasap Burger , Marul, Karamelize soğan, Turşu, Ketçap",
    image: DoubleBurger,
    price: 109 + "TL",
  },
  {
    id: 6,
    title: "Double Cheese Burger",
    description: "360gr Burger Köftesi , Turşu, Double Cheedar Peyniri",
    image: DoubgleCheeseBurger,
    price: 109 + "TL",
  },
];

export default Data;
