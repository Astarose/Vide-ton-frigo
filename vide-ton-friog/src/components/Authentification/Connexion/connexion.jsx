//Connexion.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./connexion.css";
import axios from "axios";

function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('../connexionBDD.php', {
      mail: email,
      password: password
    })
    .then((response) => {
      console.log("Réponse du serveur PHP :", response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête :", error);
    });
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
