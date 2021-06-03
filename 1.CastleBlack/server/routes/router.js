const { Router } = require("express");
const router = Router();

const services = require("../services/render");
const playersController = require("../controllers/players")

router.get("/", services.homeRoutes);

router.get("/start", services.startRoutes);

router.get("/create-player", services.createPlayerRoute);

router.get("/update-player", services.updatePlayerRoute);

//API
router.post("/api/players", playersController.create);
router.get("/api/players", playersController.find);
router.put("/api/players/:id", playersController.update);
router.delete("/api/players", playersController.delete);


// router.get("/health", function(req, res) {
//   res.body = "Up and running";
//   // QUESTION: why this endpoint blocks the app?
//  // Because the response needs other methods to render anything on screen});

module.exports = router;
