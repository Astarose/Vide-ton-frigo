import React from "react";
import Swal from "sweetalert2";

export function PlateItem({item, addToCart}){


    
    const add = () => {
        Swal.fire((
            'Merci !',
                'Le produit a bien été ajouté au panier',
                'success'
        )).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
      
    }
    return(
        <article className="plateItem">
            <img
                src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e"
                id="picture"
            />
            <div className="centeredContainer">
                <h2>{item.title}</h2>
                <p id="description">{item.description}</p>
            </div>

            <div className="rightContainer">
                <div className="toto">
                    <p id="price">{item.price}€</p>
                    <div className="typeOfPlate">
                        {item.isHot ? <img id="isHot" src="https://img.icons8.com/ios/50/fire-element--v1.png" alt="flame"/> : ''}
                        {item.isCold ? <img src="https://img.icons8.com/pastel-glyph/64/snowflake--v2.png" alt="snowflake"/> : ''}
                    </div>
                </div>
                <button id="remove" onClick={add}>Ajouter au panier</button>
            </div>
        </article>
    )
}