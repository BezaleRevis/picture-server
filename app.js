const express = require("express");
const os = require("os");
const cluster = require("cluster");
const cors = require("cors");
const router = require("./routes/pages");

require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

async function startServer() {
  // setting up the server
  if (cluster.isMaster) {
    console.log("Master has been started...");
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
      cluster.fork();
    }
  } else {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  }
}
startServer();
//using routers
app.use("/", router);

module.exports = app;
