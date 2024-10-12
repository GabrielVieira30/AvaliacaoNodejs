const express = require("express");
const ControllerExercicio = require("../controllers/exercicios.js");

const router = express.Router();

const controllers = new ControllerExercicio()

router.post("/api/soma", controllers.Calcular);
router.post("/api/subtrair", controllers.Subtrair);
router.post("/api/dividir", controllers.Dividir);
router.post("/api/radicar", controllers.Radiciar);
router.post("/api/potencia", controllers.Potencia);

module.exports = router;