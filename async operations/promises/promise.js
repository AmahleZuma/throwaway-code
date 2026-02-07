// Walk dog
// Read book
// Make bed

function walkDog() {
    

    return new Promise ((resolve, reject) => {
        setTimeout( () => { 
            const walkStatus = true;


            if (walkStatus) {
                resolve("Walked my dog");
            } else {
                reject("DIDN'T WALK MY DOG");
            }


        }, 2000 )
    })

};

function readBook() {

    return new Promise((resolve, reject) => {
        setTimeout( () => { 
            const readStatus = false;

            if (readStatus) {
                resolve("Read my book");
            } else {
                reject("DID NOT READ MY BOOK");
            }

         }, 2000 )
    })
};

function makeBed() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const makeStatus = false;


            if (makeStatus) {
                resolve("Made my bed");
            } else{
                reject("DID NOT MAKE MY BED");
            }
        }, 2000)
    })
};

// Method chaining...kinda difficult to understand the structure of it but I get it though

walkDog().then(value => {console.log(value); return readBook()})
         .then(value => {console.log(value); return makeBed()})
         .then(value => {console.log(value); console.log("Tasks Completed!")})
         .catch(error => console.error(error)) // Catching an error