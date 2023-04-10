import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import Button from '../button/button';
import './game-buy.css';

function GameBuy({ game }) {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === game.id);

	const handleClick = (e) => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game));
		} else {
			dispatch(setItemInCart(game));
		}
	};
	return (
		<div className='game-buy'>
			<span className='game-buy__price'>{game.price} гр.</span>
			<Button
				onClick={handleClick}
				type={isItemInCart ? 'secondary' : 'primary'}
			>
				{isItemInCart ? 'Прибрати з кошика' : ' У кошик'}
			</Button>
		</div>
	);
}

export default GameBuy;
