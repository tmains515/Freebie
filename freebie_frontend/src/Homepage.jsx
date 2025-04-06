const Homepage = () => {
    return (
<div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen">
  {/* Header */}
  <header className="pt-2 pl-2 pr-2 text-6xl italic font-sans font-semibold text-gray-100">Freebie</header>
  <p className="pl-2 pr-2 pb-2">The primere site for giving things away!</p>
  {/* Main content - grows to fill space */}
  <main className="flex-grow flex flex-col justify-center items-center">
    <h2 className="text-gray-100 text-3xl mb-4">Welcome to Freebie!</h2>
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center w-full max-w-md mb-10">
      <h2 className="text-cyan-600 text-2xl font-medium">Sign up to see what's out there!</h2>
      <button className="bg-cyan-400 text-white p-2 rounded-md mt-2 w-24 hover:bg-cyan-300 border-2 hover:border-cyan-400 transition-colors duration-300">
        Sign-Up
      </button>
      <p className="flex text-cyan-400">Already a member? <a href="/login">Click Here</a></p>

    </div>
  </main>

  {/* Footer - sticks to bottom */}
  <footer className="bg-gray-100 text-cyan-400 p-2 w-full text-center">
    By Tyler Mains
  </footer>
</div>

    )
}
export default Homepage;