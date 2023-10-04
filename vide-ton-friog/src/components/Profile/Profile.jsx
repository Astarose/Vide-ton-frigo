//Profile.tsx
import HeaderPage from "../Header/Header";
import { Link } from "react-router-dom";

function Profile() {
    return(
        <div>
            <div className="header">
                <HeaderPage/>
        </div>
        <div className="homePage">
            <Link to="/inscription">
                <h3>
                    Inscription
                </h3>
            </Link>
        </div>
        <div className="homePage">
            <Link to="/connexion">
                <h3>
                    connexion
                </h3>
            </Link>
        </div>
        </div>
    )
}

export default Profile;