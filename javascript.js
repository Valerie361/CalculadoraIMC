let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado"); 
let valorIMC = document.getElementById("valorIMC"); 

function calcularIMC() {
    let A = parseFloat(peso.value);
    let B = parseFloat(altura.value);
    let imc = A / (B * B);
    ColorIMC(imc);
    ClasificarIMC(imc);
}
function ColorIMC(imc) {
    document.getElementById("valorIMC")
    if (imc >= 22 && imc <= 24.9) {
        document.getElementById("valorIMC").style.color = "green";
    } 
    else {
        document.getElementById("valorIMC").style.color = "red"; 
    }
}
    // nunca pedir un valor ANTES del resultado, porque si el usuario no ingresa un valor, 
    // el resultado se mostrará como "NaN" y eso no es lo que queremos mostrar al usuario. Por eso, 
    // primero verificamos si los valores ingresados son válidos antes de mostrar el resultado del IMC.

    // ----------VALIDACIONES DE LOS CAMPOS DE ENTRADA----------
    // if (isFinite(imc)== false){
    // resultado.innerText = "Por favor, ingrese valores válidos 😊";
    // return;
    // }
function ClasificarIMC(imc) {
    if (isNaN(peso.value) || isNaN(altura.value) || peso.value <= 0 || altura.value <= 0) {
        resultado.innerText = "Por favor, ingrese todos los campos correctamente 😊";
        return;
    }
    else if (imc <= 16) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Desnutrición severa";
    }
    else if (imc <= 18.4) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Desnutricion moderada";
    }
    else if (imc <= 22) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Bajo peso";
    }
    else if (imc <= 24.9) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Peso normal";
    }
    else if (imc <= 29.9) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Sobrepeso";
    }
    else if (imc <= 34.9) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Obesidad tipo 1";
    }
    else if (imc <= 39.9) {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Obesidad tipo 2";
    }
    else {
        valorIMC.innerText = imc.toFixed(1)
        resultado.innerText = "Obesidad tipo 3";
    }
    
}



    