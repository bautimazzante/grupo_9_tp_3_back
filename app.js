const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3000;

// Ruta inicial
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Ruta servicios
app.get("/servicios", async (req, res) => {
  try {
    const data = await fs.readFile("./data/servicios.json", "utf-8");

    const servicios = JSON.parse(data);

    res.json(servicios);

  } catch (error) {
    console.log(error);

    res.status(500).send("Error interno del servidor");
  }
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/servicios/:id", async (req, res) => {
  try {

    const data = await fs.readFile("./data/servicios.json", "utf-8");

    const servicios = JSON.parse(data);

    const id = Number(req.params.id);

    const servicio = servicios.find(s => s.id === id);

    if (!servicio) {
      return res.status(404).send("Servicio no encontrado");
    }

    res.json(servicio);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error interno del servidor");
  }
});

app.get("/equipo", async (req, res) => {

  try {

    const data = await fs.readFile("./data/equipo.json", "utf-8");

    const equipo = JSON.parse(data);

    res.json(equipo);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error interno del servidor");
  }
});

app.get("/perfil/:id", async (req, res) => {

  try {

    const data = await fs.readFile("./data/usuarios.json", "utf-8");

    const usuarios = JSON.parse(data);

    const id = Number(req.params.id);

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {

      return res.status(404).send("Usuario no encontrado");

    }

    res.json(usuario);

  } catch (error) {

    console.log(error);

    res.status(500).send("Error interno del servidor");

  }
});