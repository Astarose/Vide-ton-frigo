//Connexion.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./connexion.css";

function Connexion() {
  // États locaux pour stocker les valeurs des champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique d'authentification côté client
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="formulaire">
        <div>
          <input
            placeholder="adresse mail"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="mot de passe"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="groupeCda">
          <div>
            <button className="cda" type="submit">
              Se connecter
            </button>
          </div>
          <div>
          <Link to="/inscription">
            <button className="cda">S'inscrire</button>
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Connexion;
