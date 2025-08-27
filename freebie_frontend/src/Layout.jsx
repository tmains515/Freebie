
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-cyan-200 min-h-screen flex flex-col w-screen justify-center">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout