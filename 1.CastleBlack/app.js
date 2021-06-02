const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const consola = require("consola");
const router = require("./server/routes/router.js");
const api = require("./src/api.js");
const morgan = require("morgan");
const path = require("path");

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
app.set("port", port);

async function run() {
  app.disable("x-powered-by"); // QUESTION: any reason is this line here?
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //logging requests
  app.use(morgan("tiny"));

  //setting view engine
  app.set("view engine", "ejs");

  //getting assets from src
  app.use("/src", express.static("src"));
  app.use("/js", express.static(path.resolve(__dirname, "src/js")));
  app.use("/img", express.static(path.resolve(__dirname, "src/img")));

  //getting views from router
  app.use("/", router);
  app.use("/api", api);

  const server = http.createServer(app);

  server.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

run();