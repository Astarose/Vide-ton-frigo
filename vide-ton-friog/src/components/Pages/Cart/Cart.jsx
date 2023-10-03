//CartPage.tsx

import HeaderPage from "../../Header/Header";
import {CartItem} from "./CartItem";
import Swal from 'sweetalert2'
import './cart.css'

const panier = [
    {
        id: 1,
        title: "Item 1",
        price: 10.99,
        description: "This is item 1.",
        isCold: true,
        isHot: false,
    },
    {
        id: 2,
        title: "Item 2",
        price: 8.49,
        description: "This is item 2.",
        isCold: false,
        isHot: true,
    },
    {
        id: 3,
        title: "Item 3",
        price: 12.99,
        description: "This is item 3.",
        isCold: true,
        isHot: true,
    },
    {
        id: 4,
        title: "Item 4",
        price: 4.99,
        description: "This is item 4.",
        isCold: true,
        isHot: false,
    },
    {
        id: 5,
        title: "Item 5",
        price: 5.99,
        description: "This is item 5.",
        isCold: true,
        isHot: false,
    },
    {
        id: 6,
        title: "Item 6",
        price: 6.99,
        description: "This is item 6.",
        isCold: true,
        isHot: false,
    },
];

function CartPage() {
    function removeFromCart(itemId) {

        const updatedPanier = panier.filter((item) => item.id !== itemId);
    }


        const checkout = () =>{
        Swal.fire({
            title: 'Voulez-vous acheter ces produits',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Achat confirmé !', '', 'success')
            } else if (result.isDenied) {
                Swal.fire(
                    'Très bien',
                    'Les produits sont toujours présent dans votre panier.',
                    'info'
                )}
        })
    }

    const totalPrice = panier.reduce((acc, item) => acc + item.price, 0);


    return(
        <div className="cartPage">
            <HeaderPage/>
            <div className="cartContainer">
                <div className="cartItemContainer">
                    {panier.length !== 0 ? (
                        panier.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeFromCart={removeFromCart}
                            />
                        ))
                    ) : (
                        <h1>Votre panier est vide</h1>
                    )}
                </div>
                <div className="checkoutContainer">
                    <h2>
                        Résumé de la commande
                    </h2>
                    <div className="price">
                        <h4>Prix </h4>
                        <p>{totalPrice.toFixed(2)} €</p>
                    </div>
                    <button onClick={checkout}>
                        Acheter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartPage;