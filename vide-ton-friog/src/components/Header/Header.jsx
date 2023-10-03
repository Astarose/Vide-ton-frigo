//HeaderPage.tsx
import './header.css';
import { Link } from "react-router-dom";
import { BiCart } from 'react-icons/bi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Logo from "../Assets/Logo";

function HeaderPage() {
    return (
        <div className="navigation">
            <div className="categories">
                <Link to="/">
                    <Logo />
                </Link>
                <Link to="/hotPlates">
                    <h3>
                        Plats chauds
                    </h3>
                </Link>
                <Link to="/coldPlates">
                    <h3>
                        Plats froids
                    </h3>
                </Link>
                <Link to="/about">
                    <h3>
                        A Propos
                    </h3>
                </Link>
            </div>
            <div className="navBar">
                <Link to="/favorites">
                    <MdOutlineFavoriteBorder />
                </Link>
                <Link to="/cart">
                    <BiCart />
                </Link>
                <Link to="/profile">
                    <CgProfile />
                </Link>
            </div>
        </div>
    )
}

export default HeaderPage;
