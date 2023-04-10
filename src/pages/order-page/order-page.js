import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/order-item/order-item'
import { calcTotalPrice } from '../../components/utils'
import './order-page.css'

const OrderPage = () => {
	const items = useSelector((state) => state.cart.itemsInCart);
	function declOfNum(n, text_forms) {
		n = Math.abs(n) % 100;
		let n1 = n % 10;
		if (n > 10 && n < 20) {
			return text_forms[2];
		}
		if (n1 > 1 && n1 < 5) {
			return text_forms[1];
		}
		if (n1 === 1) {
			return text_forms[0];
		}
		return text_forms[2];
	}

	if (items.length < 1) {
		return <h1>Кошик пустий</h1>;
	} else {
		return (
			<div className='order-page'>
				<div className='order-page__left'>
					{items.map((item) => (
						<OrderItem game={item} />
					))}
				</div>
				<div className='order-page__right'>
					<div className='order-page__total-price'>
						<span>
							{`${items.length} ${declOfNum(items.length, [
								'товар',
								'товару',
								'товарів',
							])}
							на суму ${calcTotalPrice(items)} гр.`}
						</span>
					</div>
				</div>
			</div>
		);
	}
};

export default OrderPage;
