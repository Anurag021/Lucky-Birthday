var dateOfBirth = document.querySelector("#dateOfBirth");
var luckyNumber = document.querySelector("#lucky-Number");
var btnCheck = document.querySelector("#btn-Check");
var result = document.querySelector("#result");
var sum = 0;

btnCheck.addEventListener("click", clickHandler);

function clickHandler(){
    var DOB = dateOfBirth.value;
    DOB = DOB.replaceAll('-',"") 
    while(DOB>0){
        sum = sum + (DOB % 10);
        DOB = Math.trunc(DOB/10)   
    }
    if (sum /luckyNumber.value == 0){
        result.innerText = "DOB is a lucky number"
    }else{
        result.innerText = "DOB is not a lucky number"
    }
}