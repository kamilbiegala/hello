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
      if (!(a === 2)) { alert("asd") }
      
   }
    if (to === 'me') to = require('os').userInfo().username
    return `Hello ${to}!`
    log("asd")
  }
}
