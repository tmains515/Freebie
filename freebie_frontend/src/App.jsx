import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/Homepage/Homepage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Homepage/Login'

import './App.css'

function App() {

	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <Homepage/> }/>

		</Routes>
	</BrowserRouter>
	)
  }

export default App
