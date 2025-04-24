import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./PrihlaseniRegistrace.css";
import emailIcon from "../assets/email_icon.svg";
import profileIcon from "../assets/profile_icon.svg";
import passwordIcon from "../assets/password_icon.svg";

const Registrace = () => {
  const [email, setEmail] = useState("");
  const [prezdivka, setPrezdivka] = useState("");
  const [heslo, setHeslo] = useState("");
  const [znovuHeslo, setZnovuHeslo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !prezdivka || !heslo || !znovuHeslo) {
      setError("Vyplňte prosím všechna pole.");
      return;
    }

    if (heslo !== znovuHeslo) {
      setError("Hesla se neshodují.");
      return;
    }

    fetch("http://localhost:8081/registrace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, prezdivka, heslo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          alert(data.message || "Registrace úspěšná ✅");
          navigate("/Prihlaseni"); 
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Chyba při registraci.");
      });
  };

  return (
    <div className="prihlaseni-registrace-container">
      <div className="Formular">
        <h2>Registrace</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="inputwrap">
            <img className="email-icon" src={emailIcon} alt="Email Icon" />
            <input
              className="emailIcon"
              type="email"
              name="email"
              placeholder="Zadejte email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputwrap">
            <img className="profile-icon" src={profileIcon} alt="Profile Icon" />
            <input
              className="profileIcon"
              type="text"
              name="prezdivka"
              placeholder="Zadejte přezdívku"
              value={prezdivka}
              onChange={(e) => setPrezdivka(e.target.value)}
              required
            />
          </div>
          <div className="inputwrap">
            <img className="password-icon" src={passwordIcon} alt="Password Icon" />
            <input
              className="passwordIcon"
              type="password"
              name="heslo"
              placeholder="Zadejte heslo"
              value={heslo}
              onChange={(e) => setHeslo(e.target.value)}
              required
            />
          </div>
          <div className="inputwrap">
            <img className="password-icon" src={passwordIcon} alt="Password Icon" />
            <input
              className="passwordIcon"
              type="password"
              name="Znovuheslo"
              placeholder="Zadejte heslo znovu"
              value={znovuHeslo}
              onChange={(e) => setZnovuHeslo(e.target.value)}
              required
            />
          </div>

          <button type="submit">Zaregistrovat se</button>
        </form>

        <p className="toggle-link">
          Již máte účet? <a href="/Prihlaseni">Přihlásit se.</a><br />
          <Link to="/">Zpět&nbsp;na hlavní&nbsp;stránku</Link>
        </p>
      </div>
    </div>
  );
};

export default Registrace;
