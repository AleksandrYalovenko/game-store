import { useCallback, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartMenu from '../cart-menu/cart-menu';
import ItemsInCart from '../items-in-cart/items-in-cart';
import { calcTotalPrice } from '../utils';
import './cart-block.css';

function CartBlock() {
	const [isCartMenuVisible, setCartMenuVisible] = useState(false);
	const cartItems = useSelector((state) => state.cart.itemsInCart);
	const summaryPrice = calcTotalPrice(cartItems);
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		setCartMenuVisible(false);
		navigate('/order');
	}, [navigate]);

	return (
		<div className='cart-block'>
			<ItemsInCart quantity={cartItems.length} />
			<BsCart
				size={25}
				className='cart-block__icon'
				onClick={() => setCartMenuVisible(!isCartMenuVisible)}
			/>
			{summaryPrice > 0 ? (
				<span className='cart-block__price'>{summaryPrice} гр.</span>
			) : null}
			{isCartMenuVisible && (
				<CartMenu items={cartItems} onClick={handleClick} />
			)}
		</div>
	);
}

export default CartBlock;
