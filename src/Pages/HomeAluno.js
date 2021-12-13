import "../app.css";
import { Link } from "react-router-dom";

const HomeAluno = () => {
    return (
        <div className="Home">

            <div>
                <Link to="/App" className="active Link boletim">
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

export default HomeAluno;