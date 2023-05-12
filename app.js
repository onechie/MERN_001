// const os = require("os");

// //info about current user
// console.log(os.userInfo());

// //method returns the system uptime in seconds
// console.log(os.uptime() / 60, "minutes");

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(currentOS);
// const path = require("path");
// console.log(path.sep);

// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf-8", (error, result) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result : (${first}), (${second})`,
//       (error, result) => {
//         if (error) {
//           console.log(error);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
  }
  res.end(`<h1>Oops! Page not found.</h1>`)
});

server.listen(9090);
