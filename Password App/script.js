// custome attribute us krva nu syntax ("[]")

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelector("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


let password = "";
let passwordLength = 10;
let checkCount = 1;
// function call
handleSlider();
// strength circle color to grey 


// set passwordLength
  
function handleSlider (){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator (color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = "0 0 10px grey";
}

function getRndInteger (min,max){
            return Math.floor(Math.rendom () * (max-min)) + min ;
}

function generateRendomNumber(){
    return getRndInteger (0,9);
}

function generateLowerCase(){
    return String.fromCharCode (getRndInteger(97,123))     
    // asci value of small to small z 
}

function generateUpperCase(){
    return String.fromCharCode (getRndInteger(65,91))

    // asci value of capital A to capital Z
}

function generateSymbol (){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength (){
    let hasUper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (upperCaseCheck.checked) hasUper =true;
    if  (lowerCaseCheck.checked) hasLower =true;
    if  (numberCheck.checked) hasNumber =true;
    if(symbolCheck.checked) hasSymbol =true;

if (hasUper && hasLower &&(hasNumber || hasSymbol) && passwordLength >=8){
    setIndicator("#0fo");

} else if (
    (hasLower || hasUper) &&
    (hasNumber || hasSymbol) &&
    passwordLength >=5
) {
    setIndicator("#ff0");
} else{  
    setIndicator("#f00");
}

}
// await tyare kam kre jyare asyc hoy 
async function copyContent(){
            try{
                await  navigator.clipboard.writeText(passwordDisplay.value);
                copyMsg.innerText = "copied";
            }
            catch(e){
                copyMsg.innerText = "failed";
            }
            
    // to make copy 
    copyMsg.classList.add("active");
            
    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000 );


}
// 108 to 126 cehck box event listener 

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) =>{
        if(checkbox.checked)
            checkCount ++;
    });

    // special request k jyare 4 box sleect che and password ketla number ma joaie ce if 1 number hoy to ae direct 4 thai jay 
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
       
    }
}

allCheckBox.forEach ((checkbox) => {
    checkbox.addEventListener('change' ,handleCheckBoxChange);
})


inputSlider.addEventListener('input',(e) =>{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',() => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click',()=>{
        // koi chekbox selected nathi to 
        if(checkCount <= 0 ) return;

        if(passwordLength < checkCount){
            passwordLength = checkCount;
            handleSlider();

        }
    
    // new password bnava 

    // juno passwroed niklvano

    password = "";

    // checkbox ma select che ae nakhiye 

    // if(upperCaseCheck.checked){
    //     password += generateUpperCase();
    //  }

    //  if(lowerCaseCheck.checked){
    //     password += generateLowerCase();
    //  }

    //  if(numberCheck.checked){
    //     password += generateRendomNumber();
    //  }

    //  if(symbolCheck.checked){
    //     password += generateSymbol();
    //  }


    let funArr = [];

    if (upperCaseCheck.checked)
        funArr.push(generateUpperCase);

    if(lowerCaseCheck.checked)
        funArr.push(generateLowerCase);
    
    if (numberCheck.checked)
        funArr.push(generateRendomNumber);

    if(symbolCheck.checked)
        funArr.push(generateSymbol);

})  