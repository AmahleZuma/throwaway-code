// Walk dog
// Read book
// Make bed

function walkDog(thenRead) {
    setTimeout( () => { console.log("Walked my dog"); thenRead() }, 2000 )
};

function readBook(thenBed) {
    setTimeout( () => { console.log("Read my book"); thenBed() }, 2000 )
};

function makeBed(thenDone) {
    setTimeout( () => { console.log("Made my bed"); thenDone() }, 2000 )
};

walkDog(() => {
    readBook(() => {
        makeBed(() => {
            console.log("Tasks Completed");
        })
    })
})