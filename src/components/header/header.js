import { Link } from 'react-router-dom';
import CartBlock from '../cart-block/cart-block';
import './header.css';

function Header() {
	return (
		<div className='header'>
			<div className='wrapper'>
				<Link to='/game-store' className='header__store-title'>
					Game Store
				</Link>
			</div>
			<div className='wrapper header__cart-btn-wrapper'>
				<CartBlock />
			</div>
		</div>
	);
}

export default Header;
