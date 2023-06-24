import React, { useState } from 'react';
import Data from '../Data';
import Basket from './Basket';

const MainSection = () => {
    const [burgers, setBurgers] = useState(Data);
    const [selectedBurger, setSelectedBurger] = useState([]);


    const handleBasket = (burger) => {
        const isBurgerSelected = selectedBurger.find((selected) => selected.id === burger.id);
        if (!isBurgerSelected) {
            setSelectedBurger([...selectedBurger, burger]);

        }
    };

    return (
        <div className="w-full h-screen">
            <div className="w-full h-auto flex flex-wrap items-center justify-start">
                {burgers.map((burger) => (
                    <div key={burger.id} className="w-60 h-96 m-4 mb-2 flex flex-col items-center">
                        <img className="w-60 h-40" src={burger.image} alt={burger.title} />
                        <p>{burger.title}</p>
                        <p>{burger.description}</p>
                        <span>{burger.price}</span>
                        <button onClick={() => handleBasket(burger)} className="border border-solid p-2 w-40">
                            Sepete Ekle
                        </button>
                    </div>
                ))}
            </div>
            <Basket selectedBurger={selectedBurger} setSelectedBurger={setSelectedBurger} />
        </div>
    );
};

export default MainSection;

