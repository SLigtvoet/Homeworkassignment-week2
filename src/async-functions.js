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

module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}

