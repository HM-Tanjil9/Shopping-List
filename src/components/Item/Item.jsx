import { FaMinus, FaPlus } from "react-icons/fa";
import './Item.css';

function Item({itemName, quantity}) {
  return (
    <div className="item-wrapper">
      <h4>{itemName}</h4>
      <div className='item-buttons'>
        <button className='icon-button'>
          <FaMinus/>
          {/* <FaTrash/> */}
        </button>
        <span>{quantity}</span>
        <button className='icon-button'>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default Item