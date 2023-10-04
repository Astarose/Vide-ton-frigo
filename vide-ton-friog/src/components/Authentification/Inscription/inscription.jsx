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
        <div className="input">
          <input
            placeholder="prénom"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input"> 
          <input
            placeholder="nom"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <input
            placeholder="adresse"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <input
            placeholder="adresse mail"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <input
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
        <div className="input">
          <input
            placeholder="code postal"
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <input
            placeholder="city"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
          <div className="groupeCda">
          <button className="cda" type="submit">
            S'inscrire
          </button>
          <Link to="/">
            <button className="cda">
              Se connecter
            </button>
          </Link>
          </div>
      </form>
    </div>
  );
}

export default Inscription;
