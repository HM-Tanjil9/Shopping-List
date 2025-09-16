import { useState } from 'react';
import { showSuccess } from '../../utils/showToast';
import './InputItem.css';
function InputItem({addItem}) {
  const [itemInput, setItemInput] = useState('');
  return (
    <div className='item-input-wrapper'>
        <input type="text" value={itemInput} placeholder='Add an item...' onChange={(e) => setItemInput(e.target.value)}/>
        <button type="submit" onClick={() => {
          addItem(itemInput);
          showSuccess(`Added ${itemInput} successfully`)
          setItemInput('');
        }}>Add</button>
    </div>
  )
}

export default InputItem;