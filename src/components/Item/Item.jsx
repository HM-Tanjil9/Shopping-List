import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { showError, showInfo } from "../../utils/showToast";
import './Item.css';

function Item({itemName, quantity, addPlusQuantity, itemId, addMinusQuantity}) {
  return (
    <div className="item-wrapper">
      <h4>{itemName}</h4>
      <div className='item-buttons'>
        <button onClick={() => {
          if(quantity == 1) showError(`${itemName} removed successfully`)
          addMinusQuantity(itemId)
          if(quantity > 1) showInfo(`Decremented the quantity of ${itemName}`)
        }} className='icon-button'>
          <FaMinus/>
          {/* <FaTrash/> */}
        </button>
        <span>{quantity}</span>
        <button onClick={() => {
          addPlusQuantity(itemId)
          showInfo(`Incremented the quantity of ${itemName}`)
        }} className='icon-button'>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default React.memo(Item);