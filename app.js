const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const username = process.env.USER || "";
const basename = "/pun/dev/hpc_2";
const apiBasename = basename + "/api";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // API calls

app.get(apiBasename + "/user", (req, res) => {
  res.json({ username: username });
});

app.get(apiBasename + "/sharedPartitionData", (req, res) => {
  res.sendFile(path.join(__dirname, 'sharedPartitionData.json'));
});

app.get(apiBasename + "/privatePartitionData", (req, res) => {
  res.sendFile(path.join(__dirname, 'privatePartitionData.json'));
});

app.get(apiBasename + "/fairshareData", (req, res) => {
  res.sendFile(path.join(__dirname, 'fairshareData.json'));
});

app.get(apiBasename + "/storageData", (req, res) => {
  res.sendFile(path.join(__dirname, 'storageData.json'));
});

// Serve any static files
app.use(basename, express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get(basename + "/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
