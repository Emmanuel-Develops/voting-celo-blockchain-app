import { Link } from "react-router-dom"
const NavBar = ({setHeight, navState}) => {

    return (
        <header style={{top: `-${navState.height}px`}} className="fixed h-20 w-full z-10 header-nav">
            <div className="h-full w-full flex items-center px-4 md:px-0 md:w-10/12 2xl:w-8/12 py-2 mx-auto ">
                <Link to={'/'} className="logo">
                    <i className="fa-solid fa-square-poll-vertical fa-2x" style={{color: '#BFDBFE'}}></i>
                    <p className="font-mw font-bold text-lg text-blue-200 mx-2 inline-block">veto</p>
                </Link>
            </div>
        </header>
    )
}

export default NavBar
