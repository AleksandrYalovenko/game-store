import React from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { calcTotalPrice } from '../utils';
import './cart-menu.css';

const CartMenu = ({ items, onClick }) => {
	return (
		<div className='cart-menu'>
			<div className='cart-menu__games-list'>
				{items.length > 0
					? items.map((game) => (
							<CartItem
								key={game.title}
								title={game.title}
								price={game.price}
								id={game.id}
							/>
					  ))
					: 'Кошик пустий'}
			</div>
			{items.length > 0 ? (
				<div className='cart-menu__arrange'>
					<div className='cart-menu__total-price'>
						<span>Разом:</span>
						<span>{calcTotalPrice(items)} гр.</span>
					</div>
					<Button type='primary' size='m' onClick={onClick}>
						Оформити замовлення
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default CartMenu;
