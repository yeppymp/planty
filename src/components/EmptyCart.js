import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import empty_cart_image from '../assets/empty_cart.svg'

const EmptyCart = (props) => {
	const [message, setMessage] = useState('Your cart is empty.')

	useEffect(() => {
		if (props.message) setMessage(props.message)
	}, [props.message])

	return (
		<div className="empty-container">
			<img src={ empty_cart_image } alt="Empty Cart" className="h-48"/>
			<p className="my-6 text-gray-500 font-bold">{ message }</p>
			<NavLink to={'/'}>
				<button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
					Shop Some Plants
				</button>
			</NavLink>
		</div>
	)
}

export default EmptyCart