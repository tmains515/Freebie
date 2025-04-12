import leftArrow from "../../assets/Homepage/leftArrow.png"
import { useState } from "react";
const UserRegistration = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: ""
    });

    const infoChange = (e) => {
        const {name, value} = e.target;
        setFormData( (prev) => ({ ...prev, [name]: value
        }))
    }

    const submit = async () => {
    
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:8080/user/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server Error: ${response.status} - ${errorText}`);
            }
    
            const data = await response.text(); // or response.json() if your backend returns JSON
            console.log("Registration successful:", data);
            alert("Registration successful!");
    
    
        } catch (err) {
            console.error("Registration failed:", err);
            alert("Failed to register: " + err.message);
        }
    };
    

    return (
        <main className="flex-grow flex flex-col justify-center items-center">

            <div className="bg-gray-100 flex flex-col rounded-lg shadow-lg w-full max-w-lg mb-10 gap-4">
                <button className="w-8 h-8 relative left-0 m-1 top-0 transition duration-300 hover:shadow-lg hover:shadow-cyan-400 rounded-full" onClick={() => {setShowHome(true), setShowLogin(false)}}>
                    <img src={leftArrow} alt=""/>
                </button>

                {/* First Name Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="fname" className="text-cyan-500 w-20 text-right p-1 whitespace-nowrap">First Name:</label>
                    <input
                        id="fname"
                        type="text"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>
                {/* Last Name Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="lname" className="text-cyan-500 w-20 text-right p-1 whitespace-nowrap ">Last Name:</label>
                    <input
                        id="lname"
                        type="text"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>

                {/* Username Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="username" className="text-cyan-500 w-20 text-right p-1 whitespace-nowrap">Username:</label>
                    <input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={infoChange}
                        type="text"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="email" className="text-cyan-500 w-20 text-right p-1 whitespace-nowrap">Email:</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={infoChange}
                        type="text"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>

                {/* Password Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="password" className="text-cyan-500 w-20 text-right p-1">Password:</label>
                    <input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={infoChange}
                        type="password"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-row items-center px-8 gap-2">
                    <label htmlFor="confirmPassword" className="text-cyan-500 w-20 text-right p-1">Confirm Password:</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={infoChange}
                        type="password"
                        className="flex-grow text-black border-2 border-indigo-400 rounded-3xl px-6 py-2 focus:outline-none focus:border-indigo-600"
                    />
                </div>

                <button className="bg-cyan-400 text-white p-2 mb-2 rounded-md mt-2 w-24 hover:bg-cyan-300 border-2 hover:border-cyan-400 transition-colors duration-300 m-auto" type="submit" onClick={submit}>
                    Submit
                </button>
            </div>
      </main>
    )
}

export default UserRegistration;