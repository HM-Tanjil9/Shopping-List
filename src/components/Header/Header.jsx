import headerImage from '../../assets/list.png'
import './Header.css';
function Header() {
  return (
    <div className='header-wrapper'>

        <h1 className='header-text'>Shopping List</h1>
        <div className="header-image-wrapper">
            <img className='header-image' src={headerImage} alt="shopping-list" />
            
        </div>
    </div>
  )
}

export default Header