var cedula = document.getElementById("cedula-input");
var btnVerificar = document.getElementById("btn-verificar");
var respuesta = document.getElementById("respuesta");

btnVerificar.addEventListener('click', verificar);

function verificar() {
    
    let arrCedula = cedula.value.split("");
    let suma = 0;
    
    for (let i = 0; i < (arrCedula.length-1); i++) {

        arrCedula[i] = parseInt(arrCedula[i]);

        if (((i+1) % 2) == 0) {

            arrCedula[i] = arrCedula[i] * 2;
        }

        if (arrCedula[i] >= 10) {
                
                arrCedula[i] = arrCedula[i] - 9;
        }

        //Suma el arreglo.
        suma = suma + arrCedula[i];

    }

    let control = arrCedula[arrCedula.length-1]; //Dígito Control. 

    if (((suma * 9) % 10) == control) {
        
        respuesta.style.color = "#0dd635"
        respuesta.innerText = "CEDULA VALIDA";

    } else {

        respuesta.style.color = "#b51818"
        respuesta.innerText = "CEDULA INVALIDA";

    }
        

}
