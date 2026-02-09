// Walk dog
// Read book
// Make bed

function walkDog() {
    

    return new Promise ((resolve, reject) => {
        setTimeout( () => { 
            const walkStatus = false;


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
            const readStatus = true;

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
            const makeStatus = true;


            if (makeStatus) {
                resolve("Made my bed");
            } else{
                reject("DID NOT MAKE MY BED");
            }
        }, 2000)
    })
};



async function doChores() {

    try{

        const walkResult = await walkDog();
        console.log(walkResult);

        const readResult = await readBook();
        console.log(readResult);

        const makeResult = await makeBed();
        console.log(makeResult)

        console.log("You have finished all tasks")

    } catch(error) {
        // catches the error which is the reject response
        console.error(error)
    }

}

doChores()