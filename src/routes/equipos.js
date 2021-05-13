const express = require ('express');
const router = express.Router ();
const path = require ('path');
const equiposController = require ('../controllers/equiposController' );

router.get ('/1', equiposController.equipo1);
router.get ('/2', equiposController.equipo2);
router.get ('/3', equiposController.equipo3);
router.get ('/4', equiposController.equipo4);
router.get ('/5', equiposController.equipo5);
router.get ('/6', equiposController.equipo6);
router.get ('/7', equiposController.equipo7);
router.get ('/8', equiposController.equipo8);
router.get ('/9', equiposController.equipo9);
router.get ('/10', equiposController.equipo10);
router.get ('/11', equiposController.equipo11);

module.exports = router;