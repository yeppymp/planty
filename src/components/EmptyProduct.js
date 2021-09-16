import React, { useEffect, useState } from 'react'

import empty_image from '../assets/empty.svg'

const EmptyProduct = (props) => {
	const [message, setMessage] = useState('No products available.')

	useEffect(() => {
		if (props.message) setMessage(props.message)
	}, [props.message])

	return (
		<div className="empty-container">
			<img src={ empty_image } alt="Empty Products" className="h-48"/>
			<p className="mt-6 text-gray-500">{ message }</p>
		</div>
	)
}

export default EmptyProduct