import React, { useEffect, useState, useContext } from 'react'

import { Cart } from "../store/cart"

const CardProductList = (props) => {
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

	const formatNumber = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR'
	})

	const onAddQuantity = () => {
		if (productStock > 0) {
			props.addQuantity()
		} else {
			if (!showNotification) toggleNotification()
		}
	}

	return (
		<>
			{showNotification ?
				<div className="fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t
			sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-red-600 border-red-600 text-white">
					<div> Sorry, there are only {product.stock} items available for {product.name}.</div>
					<div className="flex mt-2 sm:mt-0 sm:ml-4">
						<button className="px-3 py-2 hover:bg-red-700 transition ease-in-out duration-300"
							onClick={toggleNotification}> Dismiss </button>
					</div>
				</div> : ''
			}
			<div className="flex justify-between bg-white rounded-lg p-4">
				<div className="flex">
					<img
						className="h-24 w-24 rounded object-cover object-center"
						src={product.picture}
						alt={product.name}
					/>
					<div className="mx-4">
						<h3 className="font-bold text-black">{product.name}</h3>
						<p className="line-clamp-1">{product.description}</p>
						<button className="text-blue-500" onClick={onAddQuantity}>Add Qty</button> &nbsp; | &nbsp;
						<button className="text-blue-500" onClick={props.decreaseQuantity}>Decrease Qty</button> &nbsp; | &nbsp;
						<button className="text-blue-500" onClick={props.removeFromCart}>Remove from Cart</button>
					</div>
				</div>
				<div className="col-span-2 sm:col-span-1 xl:col-span-1 text-right">
					<h1 className="text-indigo-500 text-md font-bold">{formatNumber.format(product.price * product.quantity)}</h1>
					<h1 className="text-gray-500 text-xs font-semi-bold">{formatNumber.format(product.price)} / Product</h1>
					{product.quantity ? <p className="italic">x{product.quantity}</p> : ''}
				</div>
			</div>
		</>
	)
}

export default CardProductList