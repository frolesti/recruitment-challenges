let playerDB = require("../models/model");

//we'll validate all requests for each method
//creat & save a new player
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //new player
  const player = new playerDB({
    name: req.body.name,
    age: req.body.age,
    health: req.body.health,
    bag: req.body.bag,
  });

  //save player in db
  player.save(player).then(data => {
    res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some post error occurred"
      })
  })
};

//retrieve players
exports.find = (req, res) => {
    playerDB.find()
        .then(player => {
            res.send(player)
        })
        .catch(err => {
            res.status(500).send({message:err.message|| "Error recieved when trying to retrieve user's info" })
        })
};

//update player by id
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: 
            "Data update can not be empty!"})
    }

    const id=req.params.id
    playerDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({message: `Cannot update player with id: ${id}. This player may not exist.`})
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updating player information"})
        })

};

//delete player
exports.delete = (req, res) => {
    const id = req.params.id;

    playerDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(400).send({message: `Cannot delete player with id: ${id}. Id must be wrong.`})}
            else {
                res.send({message: "Player succesfully deleted!"})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete user with id: ${id}`
            })
        })
};

function getAllPlayers(players) {}

function createPlayer() {}

function getPlayerById(id) {}

function armPlayer() {}

function killPlayer() {}

exports.module = {
  getAllPlayers,
  createPlayer,
  getPlayerById,
  armPlayer,
  killPlayer,
};
