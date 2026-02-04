const express = require("require");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;
const EXTERNAL_API = "https://api-books-ac3j.onrender.com";

// middleware
app.use(cors());
app.use(express.json());

// rutas
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${EXTERNAL_API}/users`);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.get("/books", async (req, res) => {
  try {
    const response = await axios.get(`${EXTERNAL_API}/books`);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
