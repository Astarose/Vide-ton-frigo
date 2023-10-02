//HeaderPage.tsx

import {Link} from "react-router-dom";

function HeaderPage() {
    return(
        <div className="homePage">
            <p>
                Coucou from header
            </p>
            <Link to="/cart">
                <p>Link to cart</p>
            </Link>
        </div>
    )
}

export default HeaderPage;