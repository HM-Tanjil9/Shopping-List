import { v4 as uuidv4 } from 'uuid';

export default function itemReducer(shoppingItems, action) {
    if(action.type == 'add_item') {
        return [
            ...shoppingItems, 
            {
                id: uuidv4(),
                name: action.itemName,
                quantity: 1
            }
        ];
    } else if(action.type == 'increment_item') {
        return shoppingItems.map(item => {
            if(item.id == action.itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    } else if(action.type == 'decrement_item') {
        let newShoppingItem = shoppingItems.map(item => {
            if(item.id == action.itemId) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        return newShoppingItem.filter(item => item.quantity > 0);

    }
}