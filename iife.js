(function (greet) {
  const superHero = "Batman";
  console.log(greet, superHero);
})("Hello");
  
(function (greet) {
  const superHero = "Superman";
  console.log(greet, superHero);
})("Hey");

// Module Wrapper
// It consists of 5 parts:
// exports
// require
// module
// __filename
// __dirname
//
// e.g.
// (function (exports, require, module, __filename, __dirname) {
//    const superHero = "Batman";
//    console.log(superHero);
// });


