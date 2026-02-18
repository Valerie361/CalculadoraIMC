let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado"); 
let valorIMC = document.getElementById("valorIMC"); 

function calcularIMC() {
    let A = parseFloat(peso.value);
    let B = parseFloat(altura.value);
    let imc = A / (B * B);
    document.getElementById("valorIMC")
    if (imc >= 22 && imc <= 24.9) {
        document.getElementById("valorIMC").style.color = "green";
    } 
    else {
        document.getElementById("valorIMC").style.color = "red";
    }
    valorIMC.innerText = imc.toFixed(1)

    if (isNaN(peso.value) || isNaN(altura.value) || peso.value <= 0 || altura.value <= 0) {
        resultado.innerText = "Por favor, ingrese todos los campos correctamente 😊";
        return;
    }
    else if (imc <= 16) {
        resultado.innerText = "Desnutrición severa";
    }
    else if (imc <= 18.4) {
        resultado.innerText = "Desnutricion moderada";
    }
    else if (imc <= 22) {
        resultado.innerText = "Bajo peso";
    }
    else if (imc <= 24.9) {
        resultado.innerText = "Peso normal";
    }
    else if (imc <= 29.9) {
        resultado.innerText = "Sobrepeso";
    }
    else if (imc <= 34.9) {
        resultado.innerText = "Obesidad tipo 1";
    }
    else if (imc <= 39.9) {
        resultado.innerText = "Obesidad tipo 2";
    }
    else {
        resultado.innerText = "Obesidad tipo 3";
    }
    
}
        


    