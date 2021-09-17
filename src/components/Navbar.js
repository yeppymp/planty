import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';

import { ShoppingCartIcon } from '@heroicons/react/outline'

import { Cart } from "../store/cart"

const Navbar = () => {

	const [appName] = useState('Planty')

	const carts = useContext(Cart.State)

	return (
		<header className="bg-green-600 fixed">
			<nav className="navbar-custom">
				<NavLink to={'/'} className="nav-brand hover:text-green-50">
					{appName}
				</NavLink>
				<ul className="nav-wrapper">
					<li>
						<NavLink to={'/cart'} className="relative">
							<ShoppingCartIcon className="h-6 w-6 text-white hover:text-green-100" />
							{carts.length > 0 ? <span className="cart-badge">{carts.length}</span> : ''}
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar