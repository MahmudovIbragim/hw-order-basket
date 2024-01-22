
import React, { useState } from "react";
import { menuItems } from "../orderBasket/Data";

const RednderMunu = ({ items, setItems, updateTotalPrice, totalPrice }) => {

  const [deleteCount, setDeleteCount] = useState(0);

  const deleteItem = (id, index, price) => {
    const deletedItem = items[index];

    if (deletedItem.count > 1) {
      const newData = menuItems.find((item) => item.id === id);

      const updatedItems = [...items];
      updatedItems[index].count -= 1;
      updatedItems[index].price -= newData.price;

      setDeleteCount(deleteCount + 1);
      setItems(updatedItems);
      updateTotalPrice(-newData.price); 
    } else {
      const updatedItems = items.filter((item) => item.id !== id);
      setDeleteCount(deleteCount + 1);
      setItems(updatedItems);
      updateTotalPrice(-deletedItem.price); 
    }
  };

  return (
    <div className="box">
      <h1>Добавленные Товары</h1>
      <h3> Общая сумма:{totalPrice}</h3>
      {items.map((item, index) => {
        return (
          <div className="boxContent" key={item.id}>
            <h1>{item.title}</h1>
            <p>price:{item.price}</p>
            <p>count:{item.count}</p>
            <button onClick={() => deleteItem(item.id, index, item.price)}>
              Удалить
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RednderMunu;
