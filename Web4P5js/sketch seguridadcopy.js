


const s = ( sketch ) => {
    
    
    sketch.setup = () => {
        sketch.createCanvas(200, 2000);
    };
    
    sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(100,100,50,50);
    };
    
};

let myp5 = new p5(s, 'divdeprueba');





const s2 = ( sketch ) => {
    const PATH_LENGTH = 8;
    const NUM_PATHS = 6;
    const MIN_CUTS = 3;
    const MAX_CUTS = 5;
    
    var paths = [];
    var time = 0;
    
    sketch.setup = () => {
        pruebadefuncion();
        prueba2defuncion();
        createCanvas(406, 406);
        //createCanvas(windowWidth, windowHeight);
        sketch.createPaths();
    };
    sketch.draw = () => {
        background(205, 15, 40);
        sketch.drawPaths();
        fill(205, 15, 40);
        //No parece necesario y sin embargo se queda
        noStroke();
        
        time += deltaTime;
    };
    sketch.Path = (path) => {
        return {
            path: path,
            rectanglePos: createVector(0, 0),
            rectangleSpeed: random(0.03, 0.1)
        }
    };
    sketch.createPaths = () => {
        for (let i = 0; i < NUM_PATHS; ++i) {
            randomSeed(random(1000));
            var path = []
    
            var widthRange = random(((i / NUM_PATHS) * width) - 20, ((i / NUM_PATHS) * width) + 20);
            path[0] = createVector(widthRange, -200);
            for (let j = 1; j < PATH_LENGTH; ++j) {
                var heightRange = random(((j / PATH_LENGTH) * height) - 20, (((j + 1) / PATH_LENGTH) * height) + 20);
                var widthRange = random(0, width);
    
                path[j] = createVector(widthRange, heightRange);
            }
            path[PATH_LENGTH] = createVector(random(width), height + 200);
    
            for (let k = 0; k < random(MIN_CUTS, MAX_CUTS); ++k)
                path = sketch.Chaikin(path);
    
            paths.push(sketch.Path(path));
        };
    
        paths.sort((a, b) => (a.rectangleSpeed > b.rectangleSpeed) ? 1 : -1);
    };
    sketch.drawPaths = () => {
        for (let i = 0; i < NUM_PATHS; ++i) {
            var path = paths[i].path;
            for (let j = 0; j < path.length - 1; ++j) {
                stroke(41, 14, 14, map(i, 0, NUM_PATHS - 1, 50, 225));
                strokeWeight(map(cos((time + j * path[j].y) * 0.005), -1, 1, 1.0, 4.0));
                line(path[j].x, path[j].y, path[j + 1].x, path[j + 1].y);
                
                var rectPos = paths[i].rectanglePos;
                noStroke();
                rect(rectPos.x, rectPos.y, width, height);
                paths[i].rectanglePos.y = time * paths[i].rectangleSpeed;
            }
        }
    };
    sketch.Chaikin = (path) => {
        var newPath = []
        for (let i = 0; i < path.length - 1; ++i) {
            var p1 = path[i];
            var p2 = path[i + 1];
    
            newPath.push(createVector(p1.x * 0.75 + p2.x * 0.25, p1.y * 0.75 + p2.y * 0.25));
            newPath.push(createVector(p1.x * 0.25 + p2.x * 0.75, p1.y * 0.25 + p2.y * 0.75));
        }    
        return newPath.slice();
    };

};

let myp52 = new p5(s2, 'p5sketch');