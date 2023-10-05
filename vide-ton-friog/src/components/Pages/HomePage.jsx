//HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderPage from "../Header/Header";
import Carousel from 'react-bootstrap/Carousel';
import React, {useState} from "react";
import './homePage.css'
import './spaghetti-6639970_1280.jpg';
import './sandwich-5549852_1280.jpg';
import Footer from "../Footer/Footer";


function HomePage() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div>
            <div className="header">
                <HeaderPage/>
            </div>
            <div className="carousselHomePage">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src="./sandwich-5549852_1280.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./spaghetti-6639970_1280.jpg"/>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="ecologicalReminder">
                <img src="https://cdn1.iconfinder.com/data/icons/ecology-358/126/planet-environment-sustainable-resources-natural-512.png"/>
                <div>
                    <h4>Faites un geste pour l'environnement</h4>
                    <p>Le gaspillage alimentaire entraîne une pression environnementale majeure en gaspillant des ressources précieuses telles que l'eau, l'énergie et les terres agricoles, tout en contribuant aux émissions de gaz à effet de serre, ce qui nuit gravement à l'écologie. En commandant sur vide ton frigo, vous faites donc un geste pour la planète</p>
                </div>
            </div>


            <div id="footer">
                <Footer/>
            </div>


        </div>


    )
}


export default HomePage;