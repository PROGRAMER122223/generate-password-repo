
//declare variables
var generateBtn = document.querySelector("#generate");

//declaring arrays with unicode characters
const asciinum = [48, 57];
const asciiupper = [65, 90];
const asciilower = [97, 122];
const asciisymbol = [33, 47];


function generatePassword() {

    const randomArray = [];
    const password = [];


    const length = window.prompt("Enter lenght of password");
    if (!length) {
        return;
    }
    if ((length >= 8) && (length <= 128)) {

        const num = window.confirm("select Numbers");
        const upper = window.confirm("select Upper case");
        const lower = window.confirm("select Lower case");
        const symbol = window.confirm("select Symbol");
        if ((num > 0) && (upper > 0) && (lower > 0) && (symbol > 0)) {

            if (num) {
                for (let i = asciinum[0]; i <= asciinum[1]; i++) {
                    randomArray.push(i);
                }
            }
            if (upper) {
                for (let i = asciiupper[0]; i <= asciiupper[1]; i++) {
                    randomArray.push(i);
                }
            }

            if (lower) {
                for (let i = asciilower[0]; i <= asciilower[1]; i++) {
                    randomArray.push(i);
                }
            }

            if (symbol) {
                for (let i = asciisymbol[0]; i <= asciisymbol[1]; i++) {
                    randomArray.push(i);
                }
            }

            console.log("randomArray" + randomArray);

            //for getting array of random values 
            for (let i = 0; i < length; i++) {
                password.push(String.fromCharCode(randomArray[Math.floor(Math.random() * randomArray.length)]));

            }
            //function to array to string 
            let output = "";

            for (let i = 0; i < password.length; i++) {
                output += password[i]
                console.log(output);
            }

            return output;


        } else {
            alert("Atlest choose one character type");
        }


    }
    else {
        alert("invalid length,select minimum length of 8 and maximum length of 128");
    }
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//function to copy paasword 
function myFunction() {
    var pw = document.getElementById("password");
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(pw.value);

    //document.execCommand("copy") /* Alert the copied text */
    // alert("Copied the text: " + pw.value);
    console.log("copied text " + pw.value);
    alert("copied. ");
    //refresh the page
    location.reload();

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
