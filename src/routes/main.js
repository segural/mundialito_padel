const express = require ('express');
const router = express.Router ();
const path = require ('path');
const mainController = require ('../controllers/mainController' );

router.get ('/', mainController.home);
router.get ('/index', mainController.index);
router.get ('/equipos', mainController.equipos);
router.get ('/torneo', mainController.torneo);
router.get ('/cuartos', mainController.cuartos);
router.get ('/semis', mainController.semis);
router.get ('/final', mainController.final);
router.get ('/super', mainController.super);

module.exports = router;