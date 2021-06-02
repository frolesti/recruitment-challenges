
exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.startRoutes = (req, res) => {
    res.render("menu");
}

exports.createPlayerRoute = (req, res) => {
    res.render("createPlayer");
}

exports.updatePlayerRoute = (req, res) => {
    res.render("updatePlayer");
}