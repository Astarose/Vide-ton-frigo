//Plates.tsx
import HeaderPage from "../../Header/Header";
import {PlateItem} from "./PlateItem";
import './plates.css';


const product = [
    {
        id: 1,
        title: "Item 1",
        price: 10.99,
        description: "This is item 1.",
        isCold: true,
        isHot: false,
        quantity: 200,
    },
    {
        id: 2,
        title: "Item 2",
        price: 8.49,
        description: "This is item 2.",
        isCold: false,
        isHot: true,
        quantity: 300,
    },
    {
        id: 3,
        title: "Item 3",
        price: 12.99,
        description: "This is item 3.",
        isCold: true,
        isHot: true,
        quantity: 350,
    },
    {
        id: 4,
        title: "Item 4",
        price: 4.99,
        description: "This is item 4.",
        isCold: true,
        isHot: false,
        quantity: 250,
    },
    {
        id: 5,
        title: "Item 5",
        price: 5.99,
        description: "This is item 5.",
        isCold: true,
        isHot: false,
        quantity: 200,
    },
    {
        id: 6,
        title: "Item 6",
        price: 6.99,
        description: "This is item 6.",
        isCold: true,
        isHot: false,
        quantity: 250,
    },
];
function Plates() {

    function addToCart(itemId) {

        //const updatedPanier = panier.filter((item) => item.id !== itemId);
    }

    return(
        <div className="plates">
            <HeaderPage/>
            <div className="platesContainer">
                <div className="productGrid">
                    {product && product.length !== 0 ? (
                        product.map((item) => (
                            <PlateItem
                                key={item.id}
                                item={item}
                                addToCart={addToCart}
                            />
                        ))
                    ) : (
                        <h1>Aucuns produits sont actuellement disponibles</h1>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Plates;