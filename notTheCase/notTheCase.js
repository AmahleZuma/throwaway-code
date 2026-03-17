let number = prompt("Type in a number of your choice");

if (isNaN(number))
{
    alert("This is not a number!")
}
else 
{  
    alert(`The square of your number is ${number ** 2}`);
}