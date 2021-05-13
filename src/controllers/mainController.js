const path = require ('path');
const mainController = {
    home: (req,res)=> {
        res.render ('home')
    },
    index: (req,res)=> {
        res.render ('index')
    },
    equipos: (req,res)=> {
        res.render ('equipos')
    },
    torneo: (req,res)=> {
        res.render ('torneo')
    }
};
module.exports = mainController