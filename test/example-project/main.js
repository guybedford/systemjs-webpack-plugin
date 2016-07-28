require('./a.js');
require('./a/index.js');

var three = 2 + 1;

if (1 + 1 == three) {
  System.import('./b.js').then(function(b) {
    console.log(b);
  });
}