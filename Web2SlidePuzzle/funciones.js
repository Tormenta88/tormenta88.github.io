


function cambioC(parte,parte2){
    document.getElementById(parte).style.gridColumn = cords[parte2][0];
    document.getElementById(parte2).style.gridColumn = cords[parte][0];
    document.getElementById(parte).style.gridRow = cords[parte2][1];
    document.getElementById(parte2).style.gridRow = cords[parte][1];
};
//cambioC("parte1", "parte2")



function contactoVacio(parte){
    let x = 0;
    let y = 0;
    for (var i = 0; i < 3; i++) {
        if (filas[i][filas[i].indexOf(parte)+1] == "parte5" || filas[i][filas[i].indexOf(parte)-1] == "parte5"){
            //console.log(parte, i, "fila");
            return true;
        } else if (columnas[i][columnas[i].indexOf(parte)+1] == "parte5" || columnas[i][columnas[i].indexOf(parte)-1] == "parte5"){
            //console.log(parte, i, "columna");
            return true
        };
    };
};
//contactoVacio("parte2");

function cambio(partea){
    if (contactoVacio(partea) == true){
        console.log(cords["parte5"], filas)
        cambioC(partea, "parte5");
        let cfilas = filas[cords[partea][2][1]][cords[partea][2][0]];
        let vfilas = filas[cords["parte5"][2][1]][cords["parte5"][2][0]];
        let ccolumnas = columnas[cords[partea][2][0]][cords[partea][2][1]];
        let vcolumnas = columnas[cords["parte5"][2][0]][cords["parte5"][2][1]];  
        let ccoord = cords[partea][2];
        let vcoord = cords["parte5"][2];
        let cgrid1 = cords[partea][0];
        let cgrid2 = cords[partea][1];
        let vgrid1 = cords["parte5"][0];
        let vgrid2 = cords["parte5"][1];
        
        console.log(cords["parte5"], filas)
        //Cambio en el array de filas
        let z = cfilas;
        cfilas = vfilas;
        vfilas = z;
        //Cambio en el array de columnas
        z = ccolumnas;
        ccolumnas = vcolumnas;
        vcolumnas = z;
        //Cambio en el diccionario de coordenadas
        z = ccoord
        ccoord = vcoord
        vcoord = z
        //Cambio en el diccionario de grid 1
        z = cgrid1
        cgrid1 = vgrid1
        vgrid1 = z
        //Cambio en el diccionario de grid 2
        z = cgrid2
        cgrid2 = vgrid2
        vgrid2 = z
        
        filas[cords[partea][2][1]][cords[partea][2][0]] = cfilas;
        filas[cords["parte5"][2][1]][cords["parte5"][2][0]] = vfilas;
        columnas[cords[partea][2][0]][cords[partea][2][1]] = ccolumnas;
        columnas[cords["parte5"][2][0]][cords["parte5"][2][1]] = vcolumnas;
        cords[partea][2] = ccoord;
        cords["parte5"][2] = vcoord;
        cords[partea][0] = cgrid1;
        cords[partea][1] = cgrid2;
        cords["parte5"][0] = vgrid1;
        cords["parte5"][1] = vgrid2;
        console.log(cords["parte5"], filas)
    };
};
