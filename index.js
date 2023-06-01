// const add = require('./add');

// console.log("Hello from index.js");

// const sum1 = add(1, 2)
// const sum2 = add(10, 20)

// console.log(sum1)
// console.log(sum2)

// require("./superman");
// require("./batman");

// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero")
// console.log(newSuperHero.getName())

// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero();
// console.log(superman.getName());
// superman.setName("Superman");
// console.log(superman.getName());

// const { add, sub } = require("./math");

// console.log(add(2, 3));
// console.log(sub(2, 3));

// const data = require("./data.json");
// console.log(data.address.city);

// const path = require("node:path"); // USE THIS
// const path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log(path.format(path.parse(__filename)));
// console.log(path.format(path.parse(__dirname)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("root", "drive", "folder", "index.js"));
// console.log(path.join("root", "drive", "folder", "../index.js"));
// console.log(path.join("root", "drive", "folder", "../../index.js"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("root", "drive", "folder", "index.js"));
// console.log(path.resolve("/root", "drive", "folder", "index.js"));
// console.log(path.resolve("root", "/drive", "folder", "../index.js"));
// console.log(path.resolve("root", "drive", "folder", "../../index.js"));
// console.log(path.resolve(__dirname, "data.json"));

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order Recieved! Baking a ${size} Pizza with ${topping} ...`);
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "Large") {
//     console.log("Serving a complementary drink");
//   }
// });

// console.log("Do work before event occurs in the system");

// emitter.emit("order-pizza", "Large", "Mushrooms");

// const PizzaShop = require("./pizza-shop.js");
// const DrinkMachine = require("./drink-machine.js");

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//   drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "mushrooms");
// pizzaShop.displayOrderNumber();

// const buffer = new Buffer.from("Prasad");

// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer);

// buffer.write("CodeEvolution");
// console.log(buffer.toString());

// const fs = require("node:fs");

// console.log("First");

// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Third");

// fs.writeFileSync("./greet.txt", "Hello World!");

// fs.writeFile("./greet.txt", " Hello Prasad!", { flag: "a" }, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File Written");
//   }
// });

// const fs = require("node:fs/promises");

// console.log("First");

// fs.readFile("./file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log("Second");

// async function readFile() {
//   try {
//     const data = await fs.readFile("./file.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// readFile();

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const redableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// redableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writableStream = fs.createWriteStream("./file2.txt");

// redableStream.pipe(writableStream);

// redableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });
//   res.end("Hello World!");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   res.end(JSON.stringify(superHero));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });

//   fs.createReadStream(__dirname + "/index.html").pipe(res);

//   //   const html = fs.readFileSync("./index.html", "utf-8");
//   //   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const name = "Prasad";
//   res.writeHead(200, {
//     "Content-Type": "text/html",
//   });
//   let html = fs.readFileSync("./index.html", "utf-8");
//   html = html.replace("{{name}}", name);
//   res.end(html);
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Home Page");
//   } else if (req.url === "/about") {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end("About Page");
//   } else if (req.url === "/api") {
//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });
//     res.end(
//       JSON.stringify({
//         firstName: "Bruce",
//         lastName: "Wayne",
//       })
//     );
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Page Not Found!");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const fs = require("node:fs");

// console.log("First");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Last");

// const crypto = require("node:crypto");

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Time: ", Date.now() - start);

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16;
// const MAX_CALLS = 16;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//     console.log(`Time ${i + 1}: `, Date.now() - start);
//   });
// }

// const https = require("node:https");

// // process.env.UV_THREADPOOL_SIZE = 16;
// const MAX_CALLS = 12;

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++) {
//   https
//     .request("https://www.google.com", (res) => {
//       res.on("data", () => {});
//       res.on("end", () => {
//         console.log(`Request ${i + 1}`, Date.now() - start);
//       });
//     })
//     .end();
// }

// console.log("Log 1");
// process.nextTick(() => console.log("This is process.nextTick 1"));
// console.log("Log 2");

// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// process.nextTick(() => console.log("This is process.nextTick 1"))

// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside nextTick");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick iinside Process.resolve.then");
//   });
// });
// Promise.resolve().then(() => console.log("This is Promise.resolve 3"));

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => console.log("This is setTimeout 2"), 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside nextTick");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick iinside Process.resolve.then");
//   });
// });
// Promise.resolve().then(() => console.log("This is Promise.resolve 3"));

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("This is setTimeout 2");
//   process.nextTick(() =>
//     console.log("This is inner process.nextTick inside setTimeout")
//   );
// }, 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside nextTick");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside Process.resolve.then");
//   });
// });
// Promise.resolve().then(() => console.log("This is Promise.resolve 3"));

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => {
//   console.log("This is setTimeout 2");
//   Promise.resolve().then(() =>
//     console.log("This is inner Promise.resolve inside setTimeout")
//   );
// }, 0);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// process.nextTick(() => console.log("This is process.nextTick 1"));
// process.nextTick(() => {
//   console.log("This is process.nextTick 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside nextTick");
//   });
// });
// process.nextTick(() => console.log("This is process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// Promise.resolve().then(() => {
//   console.log("This is Promise.resolve 2");
//   process.nextTick(() => {
//     console.log("This is inner process.nextTick inside Process.resolve.then");
//   });
// });
// Promise.resolve().then(() => console.log("This is Promise.resolve 3"));

// setTimeout(() => console.log("This is setTimeout 1"), 1000);
// setTimeout(() => console.log("This is setTimeout 2"), 500);
// setTimeout(() => console.log("This is setTimeout 3"), 0);

// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));

// const fs = require("node:fs");

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setTimeout(() => console.log("This is setTimeout 2"), 2000);

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
// });

// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// setTimeout(() => console.log("This is setTimeout 1"), 0);

// for (let index = 0; index < 1000000; index++) {}

// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));

// for (let index = 0; index < 1000000; index++) {}

// const fs = require("node:fs");

// fs.readFile(__filename, () => {
//   console.log("This is readFile 1");
//   setImmediate(() => console.log("This is inner setImmediate inside readFile"));
//   process.nextTick(() =>
//     console.log("This is inner process.nextTick inside readFile")
//   );
//   Promise.resolve().then(() =>
//     console.log("This is inner Promise.resolve inside readFile")
//   );
// });

// process.nextTick(() => console.log("This is process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// setTimeout(() => console.log("This is setTimeout 1"), 0);

// for (let index = 0; index < 1000000; index++) {}

// setImmediate(() => console.log("This is setImmediate 1"));
// setImmediate(() => {
//   console.log("This is setImmediate 2");
//   process.nextTick(() =>
//     console.log("This is inner process.nextTick inside setImmediate")
//   );
//   Promise.resolve().then(() =>
//     console.log("This is inner Promise.resolve inside setImmediate")
//   );
// });
// setImmediate(() => console.log("This is setImmediate 3"));

// setTimeout(() => console.log("This is setTimeout 1"), 0);
// setImmediate(() => console.log("This is setImmediate 1"));
// for (let index = 0; index < 1000000; index++) {}

// const fs = require("node:fs");

// const readableStream = fs.createReadStream(__filename);
// readableStream.close();

// readableStream.on("close", () => {
//   console.log("This is from readableStream close event callback");
// });
// setImmediate(() => console.log("This is setImmediate 1"));
// setTimeout(() => console.log("This is setTimeout 1"), 0);
// Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
// process.nextTick(() => console.log("This is process.nextTick 1"));

