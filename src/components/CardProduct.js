import React, { useEffect, useState, useContext } from 'react'

import { ShoppingCartIcon } from '@heroicons/react/outline'

import { Cart } from "../store/cart"

const CardProduct = (props) => {
	const [product, setProduct] = useState({})
	const [productStock, setProductStock] = useState(product.stock)
	const [showNotification, setshowNotification] = useState(false)

	const carts = useContext(Cart.State)

	useEffect(() => {
		if (props.product) setProduct(props.product)
	}, [props.product])

	useEffect(() => {
		let found_cart_product = carts.find(cart_product => cart_product.id === product.id)

		if (found_cart_product) setProductStock(product.stock - found_cart_product.quantity)
		else setProductStock(product.stock)
	}, [carts, product.stock, product.id])

	const toggleNotification = () => {
		setshowNotification(!showNotification)
	}

	const onAddToCart = () => {
		if (productStock > 0) {
			props.addToCart()
		} else {
			if (!showNotification) toggleNotification()
		}
	}

	const formatNumber = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	})

	return (
		<>
			{showNotification ?
				<div className="fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t
        sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white">
					<div> Sorry, the product is out of stock.</div>
					<div className="flex mt-2 sm:mt-0 sm:ml-4">
						<button className="px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300"
							onClick={toggleNotification}> Dismiss </button>
					</div>
				</div> : ''
			}
			<div className="bg-white p-6 rounded-lg">
				<img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src={product.picture} alt={product.name} />
				<h1 className="text-gray-900 text-xl font-bold">{product.name}</h1>
				<div className="my-4">
					<span className="text-gray-500 text-sm line-through">{formatNumber.format(product.price)}</span> &nbsp;
					<span className="text-indigo-500 title-font font-bold">{formatNumber.format(product.priceDiscount)}</span>
				</div>
				<p className="text-sm mb-4 text-gray-500">Stock: x{productStock}</p>
				<p className="text-base text-justify line-clamp-none xl:line-clamp-3 mb-4">{product.description}</p>
				<button className="bg-yellow-400 hover:bg-yellow-500 w-full text-white font-bold py-2 px-4 rounded"
					onClick={onAddToCart}>
					<ShoppingCartIcon className="h-6 w-6 text-white hover:text-yellow-100 inline-block" />
					&nbsp; Add to Cart
				</button>
			</div>
		</>
	)
}

export default CardProduct