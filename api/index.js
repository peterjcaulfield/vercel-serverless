const fs = require("fs");
const path = require("path");
module.exports = (req, res) => {
  let files = [];
  try {
    files = fs.readdirSync(path.join(__dirname, "_static")).map((file) => file);
  } catch (e) {
    console.log(e);
  }
  res.json({
    body: files,
    query: req.query,
    cookies: req.cookies,
  });
};
