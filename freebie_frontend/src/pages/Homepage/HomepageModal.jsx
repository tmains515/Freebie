
import { Link } from "react-router-dom"
import Login from "./Login"
const HomepageModal = ({setShowHome, setShowLogin, setShowRegister}) => {
    return(
        <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-gray-100 text-3xl mb-4">Welcome to Freebie!</h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center w-full max-w-md mb-10">
          <h2 className="text-cyan-600 text-2xl font-medium">Sign up to see what's out there!</h2>
          <button className="bg-cyan-400 text-white p-2 rounded-md mt-2 w-24 hover:bg-cyan-300 border-2 hover:border-cyan-400 transition-colors duration-300" onClick={() => {setShowHome(false), setShowRegister(true)}}>
            Sign-Up
          </button>
          <p className="text-cyan-400 px-2 pt-2 text-center">Already a member? <button onClick={() => {setShowHome(false), setShowLogin(true)}} className="ml-2">Click Here</button></p>

        </div>
      </main>
    )
}

export default HomepageModal