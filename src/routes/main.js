const express = require ('express');
const router = express.Router ();
const path = require ('path');
const mainController = require ('../controllers/mainController' );

router.get ('/', mainController.home);
router.get ('/index', mainController.index);
router.get ('/equipos', mainController.equipos);
router.get ('/torneo', mainController.torneo);

module.exports = router;