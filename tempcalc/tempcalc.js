let fahrenToCelsius = function fahrCelsius (fahr)
{
    let celsius = `${(fahr - 32 ) * 5 / 9}°`;
    return celsius;
}

let printTemp = function displayTemp(temp)
{
    console.log(temp)
}

printTemp(fahrenToCelsius(100))