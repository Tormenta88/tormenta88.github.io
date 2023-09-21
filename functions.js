let seleccionada = {
    imagen1:false,
    imagen2:false,
    imagen3:false,
    imagen4:false
};
const correctas = {
    imagen1:Math.random() < 0.5,
    imagen2:Math.random() < 0.5,
    imagen3:Math.random() < 0.5,
    imagen4:Math.random() < 0.5
};
function recorte(a){
    if (seleccionada[a] == false){
        document.getElementById(a).style.borderRadius = "10%";
        seleccionada[a] = true;
        console.log(seleccionada)
        console.log(correctas)
    } else {
        document.getElementById(a).style.borderRadius = "0%";
        seleccionada[a] = false;
        console.log(seleccionada)
    };
};
function confirmacion(){
    if (correctas.imagen1 == seleccionada.imagen1 && correctas.imagen2 == seleccionada.imagen2 && correctas.imagen3 == seleccionada.imagen3 && correctas.imagen4 == seleccionada.imagen4){
        document.getElementById("correcto").innerHTML = "Esa es la imagen correcta";
    }   
    else {
        document.getElementById("correcto").innerHTML = "Esa NO es la imagen correcta";
    };
};