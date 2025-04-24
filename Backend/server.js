const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const app = express()
app.use(cors())
app.use(express.json()) 

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'kingsblade'
})

app.get('/', (req, res) => {
    return res.json("From backend")
})

app.post('/prihlaseni', (req, res) => {
    const { email, heslo } = req.body

    if (!email || !heslo) {
        return res.status(400).json({ error: "Vyplňte všechna pole." })
    }

    const sql = "SELECT * FROM uzivatele WHERE email = ?"
    db.query(sql, [email], (err, data) => {
        if (err) return res.status(500).json({ error: "Chyba serveru." })
        if (data.length === 0) {
            return res.status(401).json({ error: "Špatný e-mail nebo heslo." })
        }

        const uzivatel = data[0]

        bcrypt.compare(heslo, uzivatel.heslo, (err, isMatch) => {
            if (err) return res.status(500).json({ error: "Chyba při ověření hesla." })

            if (isMatch) {
                return res.json({ message: "Přihlášení úspěšné ✅" })
            } else {
                return res.status(401).json({ error: "Špatný e-mail nebo heslo." })
            }
        })
    })
})

app.post('/registrace', (req, res) => {
    const { email, prezdivka, heslo } = req.body;
  
    if (!email || !prezdivka || !heslo) {
      return res.status(400).json({ error: "Vyplňte všechna pole." });
    }

    const sql = "SELECT * FROM uzivatele WHERE email = ?";
    db.query(sql, [email], (err, data) => {
      if (err) return res.status(500).json({ error: "Chyba serveru." });
      if (data.length > 0) {
        return res.status(400).json({ error: "Email již existuje." });
      }

      bcrypt.hash(heslo, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: "Chyba při hashování hesla." });
  
        const sqlInsert = "INSERT INTO uzivatele (email, prezdivka, heslo) VALUES (?, ?, ?)";
        db.query(sqlInsert, [email, prezdivka, hashedPassword], (err, result) => {
          if (err) return res.status(500).json({ error: "Chyba při ukládání uživatele." });
          return res.json({ message: "Registrace úspěšná ✅" });
        });
      });
    });
});
  

app.listen(8081, () => {
    console.log("listening")
})
