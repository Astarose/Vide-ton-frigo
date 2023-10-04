//Footer.tsx
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div className="medias">
                <Link to="https://www.instagram.com">
                    <AiOutlineInstagram/>
                </Link>
                <Link to="https://twitter.com/">
                    <RiTwitterXFill/>
                </Link>
                <Link to="https://www.linkedin.com/">
                    <FaLinkedin/>
                </Link>
            </div>

            <div className="copyrighs">
                <p>© 2020 Copyrights: Vide ton frigo</p>
            </div>
        </footer>
    )
}

export default Footer;
