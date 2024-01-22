import React, { useState } from "react";
import { menuItems } from "../orderBasket/Data";
import Style from "../orderList/OrderStyle.css";
import RednderMunu from "../renderMenu/RednderMunu";

const OrderList = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddMenu = (id) => {
    const newData = items.find((item) => item.id === id);
    const newItems = menuItems.find((item) => item.id === id);

    if (newData) {
      const newDateOrder = items.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            count: (el.count += 1),
            price: (el.price += newItems.price),
          };
        }
        return el;
      });
      setItems(newDateOrder);
    } else {
      const menuItem = menuItems.find((item) => item.id === id);
      setItems([...items, { ...menuItem, count: 1 }]);
    }

    setTotalPrice(totalPrice + newItems.price);
  };

  const updateTotalPrice = (price) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <>
      <div className="content">
        {menuItems.map((el) => {
          return (
            <div
              onClick={() => handleAddMenu(el.id)}
              className="card"
              key={el.id}
            >
              <h1>{el.title}</h1>
              <p>{el.price}</p>
              <img src={el.img} alt="" />
            </div>
          );
        })}
      </div>
      <RednderMunu
      totalPrice={totalPrice}
        items={items}
        setItems={setItems}
        updateTotalPrice={updateTotalPrice}
        />{" "}
    </>
  );
};

export default OrderList;
