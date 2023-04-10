import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './cart-item.css';

const CartItem = ({ title, price, id }) => {
	const dispatch = useDispatch();

	const handleClick = (event) => {
		console.log(event);
		dispatch(deleteItemFromCart(id));
	};

	return (
		<div className='cart-item'>
			<span className='cart-item__title'>{title}</span>
			<div className='cart-item__price'>
				<span>{price} гр.</span>
				<AiOutlineCloseCircle
					size={25}
					className='cart-item__delete-icon'
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default CartItem;
