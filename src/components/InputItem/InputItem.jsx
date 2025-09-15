import './InputItem.css';
function InputItem() {
  return (
    <div className='item-input-wrapper'>
        <input type="text" placeholder='Add an item...' />
        <button type="submit">Add</button>
    </div>
  )
}

export default InputItem;