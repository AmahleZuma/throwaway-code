for (let count = 0;  count <= 6; count += 1) 
{
    let block = "#";
    console.log(block + block.repeat(count)) // -> same as below
}

// empty canvas
let triangle = ""
for (let count = 0; count <= 6; count +=1 )
{
    triangle += "#"; // just keeps adding according to to the limit of count - when the program stops
    console.log(triangle)
}