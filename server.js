const fs = require("fs");
const server = require("http").createServer();

/// reading file

server.on("request", (req, res) => {
  fs.readFile("./big.file", (err, data) => {
    if (err) {
      res.json({ err: err });
    }
    res.json({ data: data });
  });
});

//////////////   reading stream
// server.on("request", (req, res) => {
//   const src = fs.createReadStream("./big.file");
//   src.pipe(res);
// });

server.listen(6000, () => {
  console.log("===> server on port 6000");
});
