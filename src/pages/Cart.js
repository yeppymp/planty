import { useContext } from 'react'

import {
	Cart as CartStore,
	REMOVE_FROM_CART,
	ADD_QUANTITY,
	DECREMENT_QUANTITY,
	RESET_CART
} from "../store/cart"

import EmptyCart from '../components/EmptyCart'
import CardProductList from '../components/CardProductList'

const Cart = () => {
	const carts = useContext(CartStore.State)
	const cartDispacth = useContext(CartStore.Dispatch)

	const { items, total } = carts.reduce(
		({ items, total }, { price, quantity }) => ({
			items: items + quantity,
			total: total + quantity * price
		}),
		{ items: 0, total: 0 }
	)

	const formatNumber = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	})

	return (
		<>
			{
				carts.length > 0 ?
					<div className="pt-24 px-8 pb-8">
						<h1 className="font-semibold text-xl mb-4 text-black text-opacity-50">Carts</h1>
						<div className="grid grid-flow-row gap-4">
							{carts.map(product => <CardProductList product={product} key={product.id}
								removeFromCart={() => cartDispacth({ type: REMOVE_FROM_CART, payload: product })}
								addQuantity={() => cartDispacth({ type: ADD_QUANTITY, payload: product })}
								decreaseQuantity={() => cartDispacth({ type: DECREMENT_QUANTITY, payload: product })} />)}
						</div>

						<h3 className="mt-4 mb-2">
							Items in Cart: <strong>{items}</strong> | Total Cost: <strong>{formatNumber.format(total)}</strong>
						</h3>
						<button className="text-blue-500" onClick={() => cartDispacth({ type: RESET_CART })}>Remove All Items</button>
					</div>
					:
					<EmptyCart message="Your cart is empty." />
			}
		</>
	)
}

export default Cart