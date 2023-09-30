


function cambioC(parte,parte2){
    document.getElementById(parte).style.gridColumn = cords[parte2][0];
    console.log(cords[parte][0])
    console.log(cords[parte2][0])
    document.getElementById(parte).style.gridRow = cords[parte2][1];
    console.log(cords[parte][1])
    console.log(cords[parte2][1])
}
//cambioC("parte1", "parte2")