import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";

function ShoppingList() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function handleAddItem(itemName) {
    setShoppingItems([...shoppingItems, {
      id: uuidv4(),
      name: itemName,
      quantity: 1
    }]);
  }
  function handlePlusQuantity(itemId) {
    const newShoppingItem = shoppingItems.map(item => {
      if(item.id == itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item
    })
    setShoppingItems(newShoppingItem);
  }

  function handleMinusQuantity(itemId) {
    let newShoppingItem = shoppingItems.map(item => {
      if(item.id == itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item
    })
    newShoppingItem = newShoppingItem.filter(item => item.quantity > 0);
    setShoppingItems(newShoppingItem);
  }
  return (
    <>
        <Header/>
        <div className="current-shopping-list">
          <InputItem addItem={handleAddItem}/>
          <ItemList
            shoppingItems={shoppingItems}
            addPlusQuantity={handlePlusQuantity}
            addMinusQuantity={handleMinusQuantity}
          />
          <ToastContainer/>
        </div>
    </>
  )
}

export default ShoppingList