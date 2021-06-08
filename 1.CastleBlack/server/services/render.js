const axios = require("axios");

exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.startRoutes = (req, res) => {
    //getting users from the API with axios
    axios.get("http://localhost:8080/api/players")
    .then(function(response){
        // console.log(response.data)
        res.render("menu", {players: response.data});
    })
    .catch(err => {
        res.send(err);
    })
}

exports.createPlayerRoute = (req, res) => {
    res.render("createPlayer");
}

exports.updatePlayerRoute = (req, res) => {
    axios.get("http://localhost:8080/api/players", {params: {id: req.query.id}})
        .then(function(playerData){
            res.render("updatePlayer", { player: playerData.data})
        })
        .catch(err => {
            res.send(err);
        })
}