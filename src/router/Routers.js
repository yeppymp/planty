import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from "./routes"

const Routers = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			{routes && routes.map((route) =>
				<Route key={route.path} {...route} />
			)}
		</Switch>
	</Suspense>
)

export default Routers
