let fahrenToCelsius = function (fahr)
{
    let celsius = `${(fahr - 32 ) * 5 / 9}°`;
    return celsius;
}

let printTemp = function (temp)
{
    console.log(temp)
}

printTemp(fahrenToCelsius(100))