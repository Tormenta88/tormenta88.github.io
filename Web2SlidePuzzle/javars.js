// Cargar la imagen
const image = new Image();
image.src = "slidepuzzleimg-removebg-preview.png";

// Dividir la imagen en 9 partes
image.onload = function() {
  const width = image.width;
  const height = image.height;

  // Obtener el tamaño de cada parte
  const partWidth = width / 9;
  const partHeight = height / 9;

  // Crear los 9 elementos div
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("part");
    div.id = `parte${i + 1}`;

    // Asignar la imagen a cada parte
    div.style.backgroundImage = `url(slidepuzzleimg-removebg-preview.png) no-repeat ${i * partWidth}px ${i * partHeight}px`;

    // Añadir el elemento div al contenedor
    document.querySelector(".container").appendChild(div);
  }
};

const div = document.querySelector("#parte2");
div.style.transform = "rotate(90deg)";