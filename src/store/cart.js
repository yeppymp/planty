import { createContext, useReducer, useEffect } from 'react'

const CART_KEY = "local_carts"

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"
export const ADD_QUANTITY = "ADD_QUANTITY"
export const RESET_CART = "RESET_CART"

// Context
const State = createContext()
const Dispatch = createContext()

// initial state
const initialState = []

// initializer
const initializer = (initialValue = initialState) =>
	JSON.parse(localStorage.getItem(CART_KEY)) || initialValue;

// Reducer
const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return state.find((cart_product) => cart_product.id === action.payload.id)
				? state.map((cart_product) =>
					cart_product.id === action.payload.id
						? {
							...cart_product,
							quantity: cart_product.quantity + 1
						}
						: cart_product
				)
				: [...state, { ...action.payload, quantity: 1 }]

		case REMOVE_FROM_CART:
			return state.filter((cart_product) => cart_product.id !== action.payload.id)

		case DECREMENT_QUANTITY:
			// if quantity is 1 remove from cart, otherwise decrement quantity
			return state.find((cart_product) => cart_product.id === action.payload.id)?.quantity === 1
				? state.filter((cart_product) => cart_product.id !== action.payload.id)
				: state.map((cart_product) =>
					cart_product.id === action.payload.id
						? {
							...cart_product,
							quantity: cart_product.quantity - 1
						}
						: cart_product
				)

		case ADD_QUANTITY:
			return state.map(cart_product =>
				cart_product.id === action.payload.id
					? {
						...cart_product,
						quantity: cart_product.quantity + 1
					}
					: cart_product,
			)
		// return state.map((cart_product) => {
		// 	cart_product.id === action.payload.id
		// 		? {
		// 			...cart_product,
		// 			quantity: cart_product.quantity - 1
		// 		}
		// 		: cart_product
		// }

		case RESET_CART:
			return initialState

		default:
			return state
	}
}

// Provider
const Provider = ({ children }) => {
	const [carts, dispatch] = useReducer(reducer, [], initializer)

	useEffect(() => {
		localStorage.setItem(CART_KEY, JSON.stringify(carts));
	}, [carts]);

	return (
		<State.Provider value={carts}>
			<Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
		</State.Provider>
	)
}

export const Cart = {
	State,
	Dispatch,
	Provider
}