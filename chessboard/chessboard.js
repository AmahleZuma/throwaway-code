let combination = 8

for (let set = 1; set <= combination; set += 1)
{
    if (set % 2 === 0)
    {
        console.log("# ".repeat(combination/2))
    }
    else
    {
        console.log(" #".repeat(combination/2))
    };
}
console.clear()