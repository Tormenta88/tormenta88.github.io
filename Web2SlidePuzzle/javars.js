
let cords = {
    "parte1": ["1/2","1/2"],
    "parte2": ["2/3","1/2"],
    "parte3": ["3/4","1/2"],
    "parte4": ["1/2","2/3"],
    "parte6": ["3/4","2/3"],
    "parte7": ["1/2","3/4"],
    "parte8": ["2/3","3/4"],
    "parte9": ["3/4","3/4"]
};



function cambioC(parte,parte2){
    document.getElementById(parte).style.gridColumn = cords[parte2][0];
    console.log(cords[parte][0])
    console.log(cords[parte2][0])
    document.getElementById(parte).style.gridRow = cords[parte2][1];
    console.log(cords[parte][1])
    console.log(cords[parte2][1])
}


cambioC("parte1", "parte2")