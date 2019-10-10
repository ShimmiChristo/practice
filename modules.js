//! The Revealing Module Pattern
var revealingModule = (function() {
  var privateVar = 'Ben Thomas';
  function setNameFn(strName) {
    privateVar = strName;
  }
  return {
    setName: setNameFn
  };
})();

revealingModule.setName('Paul Adams');

//! CommonJS
// require and exports
// this are synchronous - i.e. the files are loaded one by one in order inside the file
var customerStore = require('store/customer'); // import module

exports = funciton (){
  return customerStore.get('store');
}

//! NodeJS implementation
/* 
 - They are heavily influenced by CommonJS. 
 - NodeJS modules use module.exports as the object to get exported, 
   while CommonJS uses just the exports variable
 - Circular dependencies are supported and a developer can easily understand the concepts. 
 - The cons are just one file per module, only objects are made as modules and the browsers 
   cannot use these modules directly without transpiling.
- But recently Browserify, used to bundle code from the modules, uses this method in the browser. 
  Webpack also handles complex pipelines of source transformations which includes CommonJS modules.
*/
var customerStore = require('store/customer'); // import module

function customerStore(){
  return customers.get('store');
}
modules.exports = customerStore;

//! Asynchronous Module Definition (AMD)
define(['module1', ',module2'], function (module1, module2) {
  console.log((module1.setName()));
})

//! RequireJS 
/*
  - implements the AMD API. It loads the plain JS files as well as modules by using plain script tags. 
*/
<script data-main="scripts/main" src="scripts/require.js"></script>

//! ES6 modules (Native JavaScript)
/*
  - allows importing and exporting modules compatible with both synchronous and asynchronous modes of operation
  - The import statement is used to bring modules into the namespace. It is not dynamic, cannot be used anywhere in the file. 
    This is in contrast with the require and define. Th export statement makes the elements public. This static behavior makes 
    the static analyzers build the tree of dependencies while bundling the file without running code. This is used by modern 
    JavaScript frameworks like ReactJS, EmberJS, etc. The drawback is that it isn’t fully implemented in the browsers and it 
    requires a transpiler like Babel to render in the unsupported browsers.
  - If you are looking at starting a new module or project, ES2015 is the right way to go and CommonJS/Node remains the choice for the server.
*/
// ------- lib.js ----------
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x,y) {
  return sqrt(square(x) + square(y));
}

// ------- main.js ----------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4,3)); // 5