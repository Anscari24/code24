// Obtener referencias a los elementos del HTML
const baseInput = document.querySelector('#base');
const alturaInput = document.querySelector('#altura');
const calcularBtn = document.querySelector('#calcular');
const borrarBtn = document.querySelector('#borrar');
const resultadoDiv = document.querySelector('#resultado');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Función para calcular el área del triángulo
function calcularArea() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let base = parseFloat(baseInput.value) * 10;
      let altura = parseFloat(alturaInput.value) * 10;

      if (isNaN(base) || isNaN(altura)) {
            resultadoDiv.textContent = 'Por favor, introduce valores numéricos válidos.';
            return;
      }

      const area = (base * altura) / 2;
      resultadoDiv.textContent = `El área del triángulo es: ${area}`;
      canvas.width = base + 10;
      canvas.height = altura + 10;

      // Dibujar el triángulo en el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      ctx.lineTo(base, canvas.height);
      ctx.lineTo(base / 2, canvas.height - altura);
      ctx.closePath();
      ctx.fillStyle = 'red';
      ctx.fill();

      baseInput.value = '';
      alturaInput.value = '';


}
function borrarDatos() {
      baseInput.value = '';
      alturaInput.value = '';
      resultadoDiv.textContent = '';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Asignar las funciones a los eventos de los botones
calcularBtn.addEventListener('click', calcularArea);
borrarBtn.addEventListener('click', borrarDatos);