function beforerender(cmp){};
function afterrender(cmp){};

function rotar(){
    for (const [key, value] of Object.entries(correctas)) {
        console.log(key, value);
        if (value == false){
            document.getElementById(key).style.transform = "rotate(90deg)"
        };
    };
}

beforerender(rotar())
//afterrender(rotar())