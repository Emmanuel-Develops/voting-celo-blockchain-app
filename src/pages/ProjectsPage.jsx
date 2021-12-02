import NavBar from "../components/NavBar";
import { useScroll } from "../hooks/useScroll";

const ProjectsPage = () => {
  const [showNav] = useScroll();

  return (
    <div>
      <NavBar navState={showNav} />
      <div className="md:w-10/12 max-w-7xl mt-20 py-8 px-4 md:px-0 mx-auto">
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-blue-400 font-bold leading-relaxed tracking-wide">
        Avaliable Projects
        </h2>
        
      </div>
    </div>
  );
};

export default ProjectsPage;
