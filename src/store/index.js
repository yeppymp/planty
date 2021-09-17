import React from 'react'
import { Cart } from './cart'

const providers = [
	<Cart.Provider />
]

const Store = ({ children: initial }) =>
	providers.reduce(
		(children, parent) => React.cloneElement(parent, { children }),
		initial
	)

export {
	Store,
	Cart,
}