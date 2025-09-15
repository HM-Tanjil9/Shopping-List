import Item from "../Item/Item"
import "./ItemList.css"

function ItemList({shoppingItems}) {
  return (
    <div className="shopping-Items-wrapper">
        {
            shoppingItems && shoppingItems.map(item => {
                return(
                    <Item
                      itemName={item.name}
                      quantity={item.quantity}
                      key={item.id}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList