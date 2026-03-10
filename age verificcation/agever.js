// I expect this to 
/*
    1. Output the popup
    2. Check if the input age is the appropriate type(its a string and we're comparing...this step is unnecessary)
    3. Check if the input age is the appropriate to the set age condition
    4. Output whether the application is valid or invalid
 */



// Legal age to participate -- this is a string
legalAge = "15"



function verifyAge(legalAge) 
{
    // Allowing the alert and prompt to be changed easily without hassle
    
    alert("Welcome to the Hunger Games Application Portal!"); 
    let userAge = prompt("Please input your age");
    let nomUser = Number(userAge);

    if (nomUser >= 15 && nomUser <= 65) {
        console.log("Welcome!")
    }
    // Places the reasonable input between specific values and calculates time before you can apply
    else if (nomUser >= 10 && nomUser < 15)
    {
        let yearsLeft = Number(legalAge) - Number(userAge);
        console.log(`You are ${userAge} years old. The legal age is above ${legalAge}. Try again after ${yearsLeft} years!.`);
    }
    // Prevents extreme values
    else 
    {
        console.log("Please enter a valid age.")
    }
    
}

verifyAge(legalAge)