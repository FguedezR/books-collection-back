const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
// puerto dinamico
const PORT = process.env.PORT || 3000;
const EXTERNAL_API = "https://api-books-ac3j.onrender.com";

// middleware
app.use(cors());
app.use(express.json());

// rutas
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${EXTERNAL_API}/users`);
    // hay que retornar la data recibida
    console.log("Datos de usuarios recibidos");
    res.json(response.data);
    console.log(response.data[0])
  } catch (error) {
    console.error("Error en la API:", error.message);
    res
      .status(500)
      .json({ error: "Error al obtener usuarios", details: error.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const response = await axios.get(`${EXTERNAL_API}/books`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener libros" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
