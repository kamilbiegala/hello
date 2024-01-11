const { log } = require('console')

module.exports = class say {
  hello(req) {
    let {to} = req.data
    const regex = /[\[]/;  // Noncompliant: '[' does not need to be escaped when inside a character class '[]'
    const octal = '\8';    // Noncompliant: '8' is not valid octal number
    const hello = 'Hello, world\!';    // Noncompliant: '!' is not a special character
    const path  = `\/${some}\/${dir}`; // Noncompliant: '/' is not a special character
    if (parameter === void 42) { // Noncompliant
      // ...
      let a = 3;
      let x;
      if (!(a === 2)) {
        alert("asd")
      }

      if (x == 0) {
        doSomething();
      } else if (x == 1) {
        doSomethingElse();
      }

      let j = 0;
      while (true) { // Noncompliant: constant end condition
        j++;
      }
      
   }
    if (to === 'me') to = require('os').userInfo().username
    return `Hello ${to}! he he`
    log("asd")
  }
}
