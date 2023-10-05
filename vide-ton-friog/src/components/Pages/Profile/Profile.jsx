//Profile.tsx
import { Link } from "react-router-dom";


function Profile() {
    return(
        <div className="homePage">
            <p>Coucou de profil</p>
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