import { useEffect, useState, useContext } from 'react'

import { Cart, ADD_TO_CART } from "../store/cart"

import EmptyProduct from '../components/EmptyProduct'
import CardProduct from '../components/CardProduct'

const Home = () => {
	const [products, setProducts] = useState([])
	const [isProductsAvailable, setIsProductsAvailable] = useState(products && products.length > 0)
	const [showNotification, setshowNotification] = useState(false)

	const carts = useContext(Cart.State)
	const cartDispatch = useContext(Cart.Dispatch)

	const toggleNotification = () => {
		setshowNotification(!showNotification)
	}

	const addToCart = (product) => {
		cartDispatch({ type: ADD_TO_CART, payload: product })
		if (!showNotification) toggleNotification()
	}

	// function to fetch products
	const fetchProducts = () => {
		fetch('/data/products.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(function (response) {
				return response.json()
			})
			.then(function (response_products) {
				setProducts(response_products)
				setIsProductsAvailable(response_products && response_products.length > 0)
			})
	}

	// fetch products when ComponentDidMount
	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<>
			{ showNotification ?
			<div className="fixed bottom-5 right-5 w-full px-6 py-3 shadow-2xl flex flex-col items-center border-t
        sm:w-auto sm:m-4 sm:rounded-lg sm:flex-row sm:border bg-green-600 border-green-600 text-white">
				<div> 1 Product added to cart. You have {carts.length} products in cart.</div>
				<div className="flex mt-2 sm:mt-0 sm:ml-4">
					<button className="px-3 py-2 hover:bg-green-700 transition ease-in-out duration-300"
						onClick={toggleNotification}> Dismiss </button>
				</div>
			</div> : ''
			}
			{
				isProductsAvailable ?
					<div className="px-8 pb-8 pt-24">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
							{products.map(product =>
								<CardProduct product={product} key={product.id} addToCart={() => addToCart(product)} />
							)}
						</div>
					</div>
					:
					<EmptyProduct message="No available products." />
			}
		</>
	)
}

export default Home