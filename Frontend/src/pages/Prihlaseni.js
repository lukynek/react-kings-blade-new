import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./PrihlaseniRegistrace.css";
import emailIcon from "../assets/email_icon.svg";
import passwordIcon from "../assets/password_icon.svg";

const Prihlaseni = () => {
  const [email, setEmail] = useState("");
  const [heslo, setHeslo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email || !heslo) {
      setError("Vyplňte prosím všechna pole.");
      return;
    }
  
    fetch("http://localhost:8081/prihlaseni", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, heslo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          alert(data.message || "Přihlášení úspěšné ✅");
          navigate("/"); 
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Chyba při přihlašování.");
      });
  };
  

  return (
    <div className="prihlaseni-registrace-container">
      <div className="Formular">
        <h2>Přihlášení</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="inputwrap">
            <img className="password-icon" src={emailIcon} alt="Email Icon" />
            <input
              className="emailIcon"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputwrap">
            <img className="password-icon" src={passwordIcon} alt="Password Icon" />
            <input
              className="passwordIcon"
              type="password"
              name="heslo"
              placeholder="Heslo"
              value={heslo}
              onChange={(e) => setHeslo(e.target.value)}
              required
            />
          </div>

          <button type="submit">Přihlásit se</button>
        </form>

        <p className="toggle-link">
          Nemáte účet? <a href="/Registrace">Chci&nbsp;se&nbsp;zaregistrovat.</a><br />
          <Link to="/">Zpět&nbsp;na hlavní&nbsp;stránku</Link>
        </p>
      </div>
    </div>
  );
};

export default Prihlaseni;
