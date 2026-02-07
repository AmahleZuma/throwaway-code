// This is an example at async functions

function wait(data) {
    setTimeout(() => {console.log("Hello"); data()}, 2000)
};

function something() {
    console.log("My name");
    console.log("is");
    console.log("John");
};


wait(something)