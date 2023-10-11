var caminos = [];
var tiempo = 0;

var espacio2;

function setup() {
    espacio2 = createCanvas(506, 506);
    espacio2.position(0,0)
    createPaths();
}

function draw() {
    background(20, 215, 40);
    drawPaths();
    fill(205, 15, 40)
    noStroke();
    
    tiempo += deltaTime;
}

function Path(path) {
    return {
        path: path,
        rectanglePos: createVector(0, 0),
        rectangleSpeed: random(0.06, 0.1)
    }
}

function createPaths() {
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
            path = Chaikin(path);

        caminos.push(Path(path));
    }

    caminos.sort((a, b) => (a.rectangleSpeed > b.rectangleSpeed) ? 1 : -1);
}

function drawPaths() {
    for (let i = 0; i < NUM_PATHS; ++i) {
        var path = caminos[i].path;
        for (let j = 0; j < path.length - 1; ++j) {
            stroke(41, 14, 14, map(i, 0, NUM_PATHS - 1, 50, 225));
            strokeWeight(map(cos((tiempo + j * path[j].y) * 0.005), -1, 1, 1.0, 4.0));
            line(path[j].x, path[j].y, path[j + 1].x, path[j + 1].y);
            
            var rectPos = caminos[i].rectanglePos;
            noStroke();
            rect(rectPos.x, rectPos.y, width, height);
            caminos[i].rectanglePos.y = tiempo * caminos[i].rectangleSpeed;
        }
    }
}

function Chaikin(path) {
    var newPath = []
    for (let i = 0; i < path.length - 1; ++i) {
        var p1 = path[i];
        var p2 = path[i + 1];

        newPath.push(createVector(p1.x * 0.75 + p2.x * 0.25, p1.y * 0.75 + p2.y * 0.25));
        newPath.push(createVector(p1.x * 0.25 + p2.x * 0.75, p1.y * 0.25 + p2.y * 0.75));
    }
    
    return newPath.slice();
}