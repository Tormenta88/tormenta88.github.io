


function cambioC(parte,parte2){
    document.getElementById(parte).style.gridColumn = cords[parte2][0];
    console.log(cords[parte][0])
    console.log(cords[parte2][0])
    document.getElementById(parte).style.gridRow = cords[parte2][1];
    console.log(cords[parte][1])
    console.log(cords[parte2][1])
}
//cambioC("parte1", "parte2")



function contactoVacio(parte){
    let x = 0;
    let y = 0;
    for (var i = 0; i < 3; i++) {
        if (filas[i][filas[i].indexOf(parte)+1] == "parte5" || filas[i][filas[i].indexOf(parte)-1] == "parte5"){
            console.log(parte, i, "fila");
            return true;
        };
        if (columnas[i][columnas[i].indexOf(parte)+1] == "parte5" || columnas[i][columnas[i].indexOf(parte)-1] == "parte5"){
            console.log(parte, i, "columna");
        };
    };
};
//contactoVacio("parte2");