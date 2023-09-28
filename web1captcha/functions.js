function beforerender(cmp){};

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


function correciones(){
    let cc = 0;
    let cf = 0;
    for (const [key, value] of Object.entries(correctas)) {
        if (value == true){
            cc+=1
        } else{
            cf+=1
        };
    };
    for (const [key, value] of Object.entries(correctas)) {
        if (cc>1 && value == true){
            correctas[key] = false;
            cc-=1
        } if (cf == 4 && value == false){
            correctas[key] = true
            cf-=1
        }
    };   
    console.log(cc, cf)
}
beforerender(correciones())








function recorte(a){
    if (seleccionada[a] == false){
        document.getElementById(a).style.borderRadius = "10%";
        seleccionada[a] = true;
        console.log(seleccionada)
        console.log(correctas)
            for (const [key, value] of Object.entries(correctas)) {
                if (key !== a){
                    seleccionada[key] = false;
                    document.getElementById(key).style.borderRadius = "0%";
                };
            };
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