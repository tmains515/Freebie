import { Link } from "react-router-dom";
import { useState } from "react";
import HomepageModal from "./HomepageModal";
import Login from "./Login";
import UserRegistration from "./UserRegistration";
const Homepage = () => {

  const [showHome, setShowHome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);


  return (
    <div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen">

      {/* Header */}
      <header className="pt-2 pl-2 pr-2 text-6xl italic font-sans font-semibold text-gray-100">Freebie</header>
      <p className="pl-2 pr-2 pb-2">The primere site for giving things away!</p>

      {/* Content */}
      {showHome && <HomepageModal setShowHome={setShowHome} setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>}
      {showLogin && <Login setShowHome={setShowHome} setShowLogin={setShowLogin}/>}
      {showRegister && <UserRegistration setShowHome={setShowHome} setShowRegister={setShowRegister}/>}


      {/* Footer */}
      <footer className="bg-gray-100 text-cyan-400 p-2 w-full text-center">
        By Tyler Mains
      </footer>
    </div>

    )
}
export default Homepage;