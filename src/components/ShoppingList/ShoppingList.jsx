import { useReducer } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";

import itemReducer from '../../reducers/itemReducer';

function ShoppingList() {
  // const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  function handleAddItem(name) {
    dispatch({
      type: 'add_item',
      itemName: name
    })
  }
  function handlePlusQuantity(id) {
    dispatch({
      type: 'increment_item',
      itemId: id
    })
  }

  function handleMinusQuantity(id) {
    dispatch({
      type: 'decrement_item',
      itemId: id
    })
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