import React, { useState } from 'react';

const Basket = ({ selectedBurger, setSelectedBurger }) => {

    const handleIncrement = (id) => {
        const updatedBasket = selectedBurger.map((burger) => {
            if (burger.id === id) {
                return {
                    ...burger,
                    quantity: burger.quantity + 1,
                };
            }
            return burger;
        });
        setSelectedBurger(updatedBasket);
    };

    const handleDecrement = (id) => {
        const updatedBasket = selectedBurger.map((burger) => {
            if (burger.id === id && burger.quantity > 1) {
                return {
                    ...burger,
                    quantity: burger.quantity - 1,
                };
            }
            return burger;
        });
        setSelectedBurger(updatedBasket);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        selectedBurger.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };


    return (
        <div className="text-center">
            <h1 className="font-extrabold text-4xl">Sepetiniz</h1>
            <h3><span>Toplam fiyat {calculateTotalPrice() + " " + "TL"}</span></h3>
            <div className="w-full h-auto flex flex-wrap items-center justify-start">
                {selectedBurger.map((burger) => (
                    <div key={burger.id} className="w-60 h-96 m-4 mb-2 flex flex-col items-center">
                        <img className="w-60 h-40" src={burger.image} alt={burger.title} />
                        <p>{burger.title}</p>
                        <p>{burger.description}</p>
                        <span>{burger.price}</span>
                        <div>
                            <button onClick={() => handleDecrement(burger.id)} className="border border-solid p-2">
                                -
                            </button>
                            <span>{burger.quantity}</span>
                            <button onClick={() => handleIncrement(burger.id)} className="border border-solid p-2">
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Basket;
