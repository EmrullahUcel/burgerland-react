import Data from "../Data/Data";
import Header from "../header/Header";
import "../Data/Data.css";
import Burgers from "../burgers/Burgers";
import { useState } from "react";

function Container() {
  const [item, setItem] = useState(Data);

  return (
    <div>
      <Header />
      <div className="ContainerItems">
        {item.map((data) => (
          <Burgers
            setItem={setItem}
            data={data}
            title={data.title}
            description={data.description}
            image={data.image}
            price={data.price}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Container;
