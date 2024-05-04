import React from 'react';
import { useStore } from '../../data/store.js';
import Header from '../Header/Header.jsx';
import './cart.css'

const Cart = () => {
	const { cart, addToCart, removeFromCart, decreaseQuantity } = useStore(state => ({
		cart: state.cart,
		addToCart: state.addToCart,
		removeFromCart: state.removeFromCart,
		decreaseQuantity: state.decreaseQuantity
	}));

	const calculateTotal = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	console.log('Cart State:', cart);

	return (
		<>
			<Header />
			<section className="cartSection">
				<div>
					<h2>Shopping Cart</h2>
					<p>Total Price: <b>€{calculateTotal()} </b></p>
					<hr />
				</div>


				{cart.length > 0 ? (

					<div className='cart-container'>
						{cart.map((item, index) => (
							<div key={index} className="cart-item">

								<div className='cart-img'>
									<img src={item.imageURL} alt={item.title} style={{ width: "150px" }} />
								</div>

								<div className='cart-info-column'>
									<div className='cart-text'>
										<h3>{item.title}</h3>
										<p>${item.price}</p>
										<h4>Quantity: {item.quantity}</h4>
										<div className='cart-btn'>
											<button onClick={() => decreaseQuantity(item.id)}>-</button>
											<h4> {item.quantity}</h4>
											<button onClick={() => addToCart(item)}>+</button>

										</div>


									</div>


								</div>


							</div>

						))}
						<hr />

					</div>
				) : (
					<p>Your cart is empty.</p>
				)}
			</section>
		</>
	);
};


export default Cart;