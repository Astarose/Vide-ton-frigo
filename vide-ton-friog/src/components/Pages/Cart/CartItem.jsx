import React from "react";
import './cartItem.css'
import Swal from "sweetalert2";

export function CartItem({ item, removeFromCart }) {

    const remove = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                removeFromCart(item.id);
            }
        })
    };
    return (
        <article className="cartItem">
            <img
                src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e"
                id="picture"
            />
            <div className="centeredContainer">
                <h2>{item.name}</h2>
                <p id="description">{item.description}</p>
            </div>

            <div className="rightContainer">
                <p id="price">{item.price}€</p>
                <button id="remove" onClick={remove}>Supprimer</button>
                <div className="typeOfPlate">
                    {item.isHot ? <img id="isHot" src="https://img.icons8.com/ios/50/fire-element--v1.png" alt="flame"/> : ''}
                    {item.isCold ? <img src="https://img.icons8.com/pastel-glyph/64/snowflake--v2.png" alt="snowflake"/> : ''}
                </div>
                </div>

        </article>
    )
}