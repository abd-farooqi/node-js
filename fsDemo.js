// import fs from "fs";
import fs from "fs/promises";

// readFile() - callback
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// reafFileSync - Synchronous version
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

// readFile() - Promise .then()
fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.dir(err));
