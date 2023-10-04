//HomePage.tsx

import Connexion from "../Authentification/Connexion/connexion";
import HeaderPage from "../Header/Header";

function ConnexionPage() {
    return(
        <div>
            <div className="header">
                <HeaderPage/>
            </div>
            <div className="inscriptionPage">

                <Connexion/>
                
            </div>
        </div>

    )
}

export default ConnexionPage;