function beforerender(cmp){};
function afterrender(cmp){};

const rotaciones = ["rotate(90deg)","rotate(270deg)","rotate(180deg)"];


function rotar(){
    for (const [key, value] of Object.entries(correctas)) {
        console.log(key, value);
        if (value == false){
            document.getElementById(key).style.transform = rotaciones[(Math.floor(Math.random() * rotaciones.length))];
        };
    };
}

beforerender(rotar())
//afterrender(rotar())