//HomePage.tsx

import Inscription from "../Authentification/Inscription/inscription";
import HeaderPage from "../Header/Header";

function InscriptionPage() {
    return(
        <div>
            <div className="header">
                <HeaderPage/>
            </div>
            <div className="inscriptionPage">

                <Inscription/>
                
            </div>
        </div>

    )
}

export default InscriptionPage;