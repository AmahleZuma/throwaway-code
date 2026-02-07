// Walk dog
// Read book
// Make bed

function walkDog() {
    

    return new Promise ((resolve, reject) => {
        setTimeout( () => { 
            resolve("Walked my dog")
        }, 2000 )
    })

};

function readBook(thenBed) {

    return new Promise((resolve, reject) => {
        setTimeout( () => { 
            resolve("Read my book"); 
         }, 2000 )
    })
};

function makeBed(thenDone) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Made my bed");
        }, 2000)
    })
};

// Method chaining...kinda difficult to understand the structure of it but I get it though

walkDog().then(value => {console.log(value); return readBook()})
         .then(value => {console.log(value); return makeBed()})
         .then(value => {console.log(value); console.log("Tasks Completed!")})