for (let count = 1; count <= 100; count += 1)
{
    
    if (count % 3 === 0 && count % 5 === 0)
    {
        console.log("Fizzbuzz")
    }
    else if (count % 5 === 0)
    {
        console.log("Buzz")
    }
    else if (count % 3 === 0)
    {
        console.log("Fizz")
    }
    else 
    {
        console.log(count); 
    }

}