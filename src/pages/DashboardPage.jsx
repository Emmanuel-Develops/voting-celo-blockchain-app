import { Outlet, useLocation } from "react-router";

import NavBar from "../components/NavBar";
import { useScroll } from "../hooks/useScroll";

const DashboardPage = () => {
  const [showNav] = useScroll();

  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div>
      <NavBar navState={showNav} />
      <div className="md:w-10/12 max-w-7xl mt-20 px-4 md:px-0 mx-auto">
          
        <main className="pt-1">
          <Outlet/>
        </main>

      </div>
    </div>
  );
};

export default DashboardPage;
