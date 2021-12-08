import { Outlet } from "react-router";

import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import { useScroll } from "../hooks/useScroll";

const DashboardPage = () => {
  const [showNav] = useScroll();

  return (
    <div>
      <NavBar navState={showNav} />
      <div className="md:w-10/12 max-w-7xl mt-20 py-8 px-4 md:px-0 mx-auto">
        
        <h2 className="mb-10 lg:mb-16 text-2xl md:text-3xl lg:text-4xl text-blue-400 font-bold leading-relaxed tracking-wide">
        Avaliable Projects
        </h2>

        <Grid />
        <Outlet/>

      </div>
    </div>
  );
};

export default DashboardPage;
