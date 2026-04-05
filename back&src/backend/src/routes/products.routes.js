// Configuración de rutas para productos
const express = require("express");
const router = express.Router();

// importación con verificación
const controller = require("../controllers/products.controller");

console.log("Controller importado:", Object.keys(controller)); // para ver que se hallan importado las funciones correctamente

// Verificamos que las funciones existan
if (typeof controller.getProductos !== 'function') {
    console.error("Error: getProductos no es una función");
}

if (typeof controller.createProducto !== 'function') {
    console.error("rror: createProducto no es una función");
}

// Rutas
router.get("/productos", controller.getProductos);

router.post("/productos", controller.createProducto || ((req, res) => {
    res.status(500).json({ error: "createProducto no está definido en el controlador" });
}));

module.exports = router;