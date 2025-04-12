import { useState } from 'react'
import leftArrow from '../../assets/Homepage/leftArrow.png'
import { useNavigate } from 'react-router-dom'
const login = ( {setShowHome, setShowLogin} ) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleInfoChange = (e) => {
        const {name, value} = e.target;
        setForm( prev => ({...prev, [name]: value
        }))
    }

    const submit = async() => {
        if(form.email === "" || form.password === ""){
            alert("Must have both email and password")
        }

        const response = await fetch("http://localhost:8080/user/login", {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                email: form.email,
                password: form.password
            })
        });
        
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        else{
            navigate("/dashboard")
        }

    }


    return (

        <main className="flex-grow flex flex-col justify-center items-center">
            <div className="bg-gray-100 flex flex-col rounded-lg shadow-lg w-full max-w-md mb-10 gap-4">
                <button className="w-8 h-8 m-1 relative left-0 top-0 transition duration-300 hover:shadow-lg hover:shadow-cyan-400 rounded-full" onClick={() => {setShowHome(true), setShowLogin(false)}}>
                    <img src={leftArrow} alt="" />
                </button>

                {/* Email Field */}
                <div className="flex flex-row items-center px-8">
                    <label htmlFor="email" className="text-cyan-500 w-20 text-right p-1">Email:</label>
                    <input
                        id="email"
                        type="text"
                        name='email'
                        value={form.email}
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                        onChange={handleInfoChange}
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-row items-center px-8">
                    <label htmlFor="password" className="text-cyan-500 w-20 text-right p-1">Password:</label>
                    <input
                        id="password"
                        type="password"
                        name='password'
                        value={form.password}
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                        onChange={handleInfoChange}
                    />
                </div>

                <button className="bg-cyan-400 text-white p-2 mb-2 rounded-md mt-2 w-24 hover:bg-cyan-300 border-2 hover:border-cyan-400 transition-colors duration-300 m-auto" type='submit' onClick={submit}>
                    Sign-In
                </button>
            </div>

        </main>

    )
}
export default login