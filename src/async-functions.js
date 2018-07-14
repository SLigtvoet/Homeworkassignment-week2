

function giveItBackLater(value, callback){
    setTimeout(() => {
        callback(value)
    }, 100)
}


function promiseToGiveItBackLater(value) {
    return new Promise(resolve => {
        giveItBackLater(value, resolve);
    })

}


function addSomePromises(promise) {
   return new Promise (resolve => { 
    promise.then(function (fulfilled) {
        resolve(fulfilled + fulfilled)
    })
    .catch(function (error) {
        resolve(error + error + error)
    });
   });
}
    
    



// 1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with the `value` later. 
// It should use the same function you defined in `giveItBackLater`. That means you will wrap your callback-style function with a promise-style version.
// 1. When the code `const outputPromise = addSomePromises(somePromise)` is executed, your function should return
// a new promise that has both a fulfillment handler and a rejection handler.

//      - When `somePromise` resolves with a string `"foo"`, the `outputPromise` should resolve with a string `"foofoo"`.
//      - When `somePromise` is rejected with the value `"bar"`, the `outputPromise`  should resolve with `"barbarbar"`.

//    So, your fulfillment handler should double the string and the rejection handler should triple the string.

module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}


// var firstMethod = function() {

  
  
//  var secondMethod = function(someStuff) {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//           console.log('second method completed');
//           resolve({newData: someStuff.data + ' some more data'});
//        }, 2000);
//     });
//     return promise;
//  };
  
//  var thirdMethod = function(someStuff) {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//           console.log('third method completed');
//           resolve({result: someStuff.newData});
//        }, 3000);
//     });
//     return promise;
//  };
  
//  firstMethod()
//     .then(secondMethod)
//     .then(thirdMethod);