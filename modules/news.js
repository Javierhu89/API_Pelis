const fetch = require("node-fetch");
const apikey = '58de1f45';
const pelicula = "";
const url = `http://www.omdbapi.com/?t=${pelicula}&apikey=${apikey}`;

exports.getHome = (req,res) => {
    res.render('home')
};
exports.getFilm = (req,res) => {
    fetch(`http://www.omdbapi.com/?s=${req.body.pelicula}&apikey=${apikey}`)
    .then(peli => peli.json())
    .then(data => {
        console.log(data.Search.length)
        console.log(data.Search) 
        if(data.Response=="False"){
            res.render('film', {titulo:"Film doesn`t found", director: "Film doesn`t found", descripcion: "Film doesn`t found", imagen:""});
        } else {
            res.render('film', {Resultados: data.Search, Longitud: data.Search.length})
        }
    })
    .catch(error => console.log(error))
};