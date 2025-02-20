let changeThemeBtn = document.body.querySelector("#darkAndLightImg");
let calculator = document.body.querySelector("#calculator");
let darkLightImg = document.body.querySelector("#darkAndLightImg");
let mainHeading = document.body.querySelector(".mainHeading");
let calculations = document.body.querySelector(".calculations");
let specialDigits = document.body.querySelectorAll(".forChange");
let lightTheme = true;

//  change theme functionality

changeThemeBtn.addEventListener("click", function () {

    if (lightTheme) {  //  do dark them

        darkLightImg.src = "./assets/brightness.png";
        calculator.classList.toggle("calculatorDark");
        mainHeading.classList.toggle("mainHeadingDark");
        calculations.classList.toggle("caculationsDark");
        specialDigits.forEach(function (eachElements) {
            eachElements.classList.toggle("specialDigitsDark");
        })

        console.log("dark mode");
        lightTheme = false
    }
    else {  // do light theme

        darkLightImg.src = "./assets/night-mode.png"
        calculator.classList.toggle("calculatorDark");
        mainHeading.classList.toggle("mainHeadingDark");
        calculations.classList.toggle("caculationsDark");
        specialDigits.forEach(function (eachElements) {
            eachElements.classList.toggle("specialDigitsDark");
        })

        console.log("light mode");
        lightTheme = true;
    }
})


// calculation functionality

let calculationArea = document.body.querySelector(".miniCalcula5tions");
let calculationAreaResult = document.body.querySelector(".result")
let userInput = "";

// all digits functionality
let allDigits = [...document.body.querySelector(".Digits").querySelectorAll("span")];

allDigits.forEach(function (items) {
    items.addEventListener("click", function () {
        
        if(items.innerHTML == "AC"){
            userInput = "";
            calculationArea.innerHTML = "00";
            calculationAreaResult.innerHTML =  "00";

        }
        else if(items.innerHTML == "="){
            userInput =  eval(userInput);
            calculationAreaResult.innerHTML = userInput;
        }
        else{

        userInput = userInput + items.innerHTML;
        calculationArea.innerHTML = userInput;
        // userInput =  eval(userInput);
        // calculationAreaResult.innerHTML = userInput;

        }

    })
});








// let calculatingDigits =  calculationArr.map(function(items){
//   return Number(items)
// })
// calculatingDigits.join("")






