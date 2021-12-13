import "../app.css";
import { Link } from "react-router-dom";

const HomeProf = () => {
    return (
        <div className="Home">

            <div>
                <Link to="/AppProf" className="active Link boletim">
                    Boletim
                </Link>
            </div>

            <div>
                <Link to="/AppChat" className="active Link chat">
                    Chat
                </Link>
            </div>

        </div>


    )
}

export default HomeProf;