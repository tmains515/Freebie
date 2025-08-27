import Homepage from './pages/Homepage/Homepage'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserDashboard from './pages/Dashboard/UserDashboard'
import UserProfile from './pages/User/UserProfile'
import NewListing from './Components/NewListing'
import './App.css'
import Layout from './Layout'

function App() {

	return (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Layout/>}/>
				<Route index element={ <Homepage/> }/>
				<Route path='/dashboard' element={<UserDashboard/>}/>
				<Route path='/profile' element={<UserProfile/>}/>
				<Route path='/new_listing' element={<NewListing/>}/>
		</Routes>
	</BrowserRouter>
	)
  }

export default App
