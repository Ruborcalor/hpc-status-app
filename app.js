const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const basename = "/pun/dev/hpc_2";
const apiBasename = basename + "/api";
const username = process.env.USER || "";
const { execSync } = require("child_process");
const fs = require("fs");
// const userGroups = execSync(`groups ${username}`).toString().split(" : ")[1].replace(/\n$/, '').split(" ");
const userGroups = execSync(`groups ${username}`)
  .toString()
  .replace(/\n$/, "")
  .split(" ");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // API calls

app.get(apiBasename + "/user", (req, res) => {
  res.json({ username: username });
});

app.get(apiBasename + "/groups", (req, res) => {
  res.json({ groups: userGroups });
});

app.get(apiBasename + "/sharedPartitionData", (req, res) => {
  const allSharedPartitionData = JSON.parse(
    fs.readFileSync("sharedPartitionData.json"),
    "utf8"
  );

  res.json(allSharedPartitionData);
});

app.get(apiBasename + "/privatePartitionData", (req, res) => {
  const allPrivatePartitionData = JSON.parse(
    fs.readFileSync("privatePartitionData.json"),
    "utf8"
  );

  const userPrivatePartitionData = allPrivatePartitionData.filter(
    (privatePartitionObject) =>
      privatePartitionObject.groups.filter((group) =>
        userGroups.includes(group)
      ).length > 0
  );

  res.json(userPrivatePartitionData);
});

app.get(apiBasename + "/fairshareData", (req, res) => {
  const allFairshareData = JSON.parse(
    fs.readFileSync("fairshareData.json"),
    "utf8"
  );

  const userFairshareData = allFairshareData.filter(
    (fairshareObject) => fairshareObject.users.indexOf(username) !== -1
  );

  res.json(userFairshareData);
});

app.get(apiBasename + "/storageData", (req, res) => {
  // read homefolderStorageData
  const homefolderStorageData = JSON.parse(
    fs.readFileSync("homefolderStorageData.json"),
    "utf8"
  );

  const userHomefolderStorageData = homefolderStorageData.filter(
    (storageObject) => storageObject.users.indexOf(username) !== -1
  );

  // read scratchStorageData
  const scratchStorageData = JSON.parse(
    fs.readFileSync("scratchStorageData.json"),
    "utf8"
  );

  // merge into storageData, filter by user
  const userScratchStorageData = scratchStorageData.filter(
    (storageObject) =>
      storageObject.groups.filter((group) => userGroups.includes(group))
        .length > 0
  );

  const userStorageData = userHomefolderStorageData.concat(
    userScratchStorageData
  );

  res.json(userStorageData);
});

// Serve any static files
app.use(basename, express.static(path.join(__dirname, "client/build")));

// Handle React routing, return all requests to React app
app.get(basename + "/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
