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
    },
    cuartos: (req,res)=> {
        res.render ('cuartos')
    },
    semis: (req,res)=> {
        res.render ('semis')
    },
    final: (req,res)=> {
        res.render ('final')
    },
    super: (req,res)=> {
        res.render ('super')
    },
};
module.exports = mainController