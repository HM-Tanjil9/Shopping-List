import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({shoppingItems, addPlusQuantity, addMinusQuantity}) {
  return (
    <div className="shopping-Items-wrapper">
        {
            shoppingItems && shoppingItems
            ?.map(item => {
                
                return(
                    <Item
                      key={item.id}
                      itemName={item.name}
                      quantity={item.quantity}
                      itemId={item.id}
                      addPlusQuantity={addPlusQuantity}
                      addMinusQuantity={addMinusQuantity}
                    />
                )
            })
        }
    </div>
  )
}

export default React.memo(ItemList);