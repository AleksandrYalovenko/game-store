export const calcTotalPrice = (cartItems) =>
	cartItems.reduce((previousValue, currentValue) => {
		return (previousValue += currentValue.price);
	}, 0);
