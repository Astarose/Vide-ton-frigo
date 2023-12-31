//Profile.tsx
import "./profile.css";
import HeaderPage from "../../Header/Header";
import {Link} from "react-router-dom";

function Profile() {

    const user = {
        first_name: "John",
        last_name: "Doe",
        address: "123 Main Street",
        mail: "johndoe@example.com",
        city: "Anytown",
        postal_code: "12345"
    };

    return(
        <div className="homePage">
            <HeaderPage/>
            <h1>Bienvenue sur votre page profil</h1>
            <div className="user-data">
                <p className="user-name">
                    Nom : {user.last_name}
                </p>
                <p className="user-name">
                    Prénom : {user.first_name}
                </p>
                <p className="user-contact">
                    Adresse: {user.address + user.postal_code}
                </p>
                <p className="user-contact">
                    Email : {user.mail}
                </p>
            </div>

            <Link to="/inscription">
                <button className="cda">S'inscrire</button>
            </Link>
            <Link to="/connexion">
                <button className="cda">Se connecter</button>
            </Link>


        </div>
    )
}

export default Profile;