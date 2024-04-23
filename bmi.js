

function calculate() {
    const weightInputElement = document.getElementById("weight-input");
    const heightInputElement = document.getElementById("height-input");
    const bmiCalculationElement = document.getElementById("bmi-calculation");
    const massageElement = document.getElementById("massage")
    
    let  results = "";
    let bmi = "";
    
    const weight = weightInputElement.value;
    const height = heightInputElement.value;
    const formula =  weight/((height/100)**2);
    bmi+=formula;
    
    weightInputElement.value = '';
    heightInputElement.value = '';
    
    if (bmi >= 18.5 && bmi <= 24.9){
        results = "your in the healthy range 👍❤️";
    }else if(bmi>25){
        results="you bmi is above avarage,you need a doctor check up 😔💔";
    }else if(bmi < 18){
        results = "your bmi is below avarage,you need a doctor check up😔💔"
    }
    bmiCalculationElement.innerHTML = `BMI:${bmi}`; 
    massage.innerHTML = results;
    
}



