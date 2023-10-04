//Inscription.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./inscription.css";

function Inscription() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    postalCode: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Données du formulaire soumises :", formData);
  };
  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="formulaire" method="post">
        <div>
          <input
            className="input"
            placeholder="prénom"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="nom"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="adresse"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="adresse mail"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="mot de passe"
            type="password"
            id="password"
            name="password"
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$"
            title="Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (@#$%^&+=!)"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="code postal"
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            className="input"
            placeholder="ville"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="groupeCda">
          <div>
          <button className="cda" type="submit">
            S'inscrire
          </button>
          </div>
          <div>
          <Link to="/connexion">
            <button className="cda">Se connecter</button>
          </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inscription;
