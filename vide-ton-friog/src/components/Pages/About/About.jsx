//About.tsx
import Footer from "../../Footer/Footer";
import { GiSaucepan } from 'react-icons/gi';
import { GiKnifeFork } from 'react-icons/gi';
import { CgShoppingBag } from 'react-icons/cg';
import HeaderPage from "../../Header/Header";
import './about.css';


function About() {
    return(
        <div id="about">
            <HeaderPage/>

            <div id="mainContent">
                <div id="mainTitle">
                    <h1>Qui sommes nous?</h1>
                </div>
                <div id="brief">
                    <img src="./spaghetti-6639970_1280.jpg"/>
                    <p>
                        Vide ton Frigo est bien plus qu'une entreprise, c'est une initiative centrale sur la communauté, axée sur le partage et la lutte contre le gaspillage alimentaire. Notre plateforme en ligne facilite la connexion entre ceux qui ont un surplus de nourriture délicieux et ceux qui en ont besoin, que ce soient des étudiants à la recherche de repas faits maison abordables ou des familles modestes souhaitant nourrir leurs proches sans se ruiner. Chez Vide ton Frigo, nous croyons en la puissance du partage pour créer un monde plus solidaire, tout en possibles le gaspillage alimentaire. Rejoignez notre mouvement et faites parti de cette belle aventure de partage et d'entraide
                    </p>
                    <h2 id="tagline">Tout le monde y gagne !</h2>
                </div>
                <div id="explainations">
                    <div id="symbols">
                        <h2 id="tagline">Comment ça marche ?</h2>
                        <div>
                            <GiSaucepan/>
                            <p>1. Cuisinez de délicieux plats</p>
                        </div>
                        <div>
                            <CgShoppingBag/>
                            <p>2. Vendez sur Vide Ton Frigo</p>
                        </div>
                        <div>
                            <GiKnifeFork/>
                            <p>Aidez quelqu'un dans le besoin</p>
                        </div>
                    </div>
                    <div id="values">
                        <h2 id="tagline">Nos valeurs!</h2>
                        <p>Chez Vide ton Frigo, nos valeurs sont au cœur de tout ce que nous faisons. Nous voulons réduire le gaspillage alimentaire, rendre la nourriture saine plus accessible et encourager le partage. Cette mission a pour but de renforcer la solidarité et l’empathie au sein de la communauté. Ces valeurs permettent la durabilité et l’engagement que nous avons envers cette dernière.</p>
                        <img src="sandwich-5549852_1280.jpg"/>
                    </div>

                    <div id="u2">
                        <h2>Vous aussi !</h2>
                        <p>Vous aussi rejoignez notre mouvement en partageant vos surplus alimentaires ou contribuant en tant que donateur. Ensemble, nous pouvons faire la différence !</p>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default About;