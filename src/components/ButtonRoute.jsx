import { Link } from "react-router-dom";
import { ReactPropTypes } from "react";

const ButtonRoute = ({route, id, text, stateData}) => {
    return (
        <Link 
            to={`/${route}`}
            state={stateData}
            id={id}
            className="font-genos text-center tracking-wider text-white uppercase font-bold bg-blue-400 rounded-md py-2 px-6 hover:bg-blue-500 transform hover:-translate-y-1 filter drop-shadow-lg"
        >
                {text}
        </Link>
    )
}

ButtonRoute.defaultProps = {
    stateData: "testing"
}

export default ButtonRoute