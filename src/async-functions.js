

function giveItBackLater(value, callback){
    function done() {
        callback(value)
    }
    setTimeout(done, 100)
    
}


function promiseToGiveItBackLater(value) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000 , value)
    })

}

function addSomePromises(value) {
    return new Promise ((resolve, reject) => {
    })
   
}


module.exports = {
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}


