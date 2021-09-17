import { lazy } from 'react'
import { withRouter } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Cart = lazy(() => import('../pages/Cart'))

const routes = [
	{
		exact: true,
		path: '/',
		component: withRouter(Home)
	},
	{
		exact: false,
		path: '/cart',
		component: withRouter(Cart)
	},
]

export default routes