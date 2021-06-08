let objectDB = require("../models/model");

//we'll validate all requests for each method
//creat & save a new player
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //setting objects
  const object = new objectDB({
    name: req.body.name,
    value: req.body.value,
  });

  //save object in db
  object.save(object).then(data => {
    // res.send(data);
    res.redirect("/start")
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some post error occurred"
      })
  })
};

//retrieve players
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;
        
        //getting a single player by id
        objectDB.findById(id)
            .then(data => {
                if(!data){
                    res.status(400).send({message: "There is no object with such id."})
                }
                else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error occurred while retrieving information"})
            })
    } else {
         //getting all players
        objectDB.find()
        .then(player => {
            res.send(player)
        })
        .catch(err => {
            res.status(500).send({message:err.message|| "Error recieved when trying to retrieve user's info" })
        })
    }

};

//update object by id
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: 
            "Data update can not be empty!"})
    }

    const id=req.params.id
    objectDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(400).send({message: `Cannot update object with id: ${id}. This object may not exist.`})
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updating object information"})
        })

};

//delete player
exports.delete = (req, res) => {
    const id = req.params.id;

    objectDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(400).send({message: `Cannot delete object with id: ${id}. Id must be wrong.`})}
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