import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routers from './router/Routers'
import Navbar from './components/Navbar'

function App() {
	return (
		<BrowserRouter>
			<div className="bg-green-100 min-h-screen w-screen">
				<Navbar />

				<Routers />
			</div>
		</BrowserRouter>
	)
}

export default App
