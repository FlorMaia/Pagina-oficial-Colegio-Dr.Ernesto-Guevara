// Función para calcular la nota final
function calcularNotaFinal() {
    const filas = document.querySelectorAll("tbody tr");
    
    filas.forEach(fila => {
        const inputs = fila.querySelectorAll("input[type='number']");
        let suma = 0;
        let contador = 0;

        inputs.forEach(input => {
            const valor = parseFloat(input.value);
            // Solo contar los valores válidos
            if (!isNaN(valor)) {
                suma += valor;
                contador++;
            }
        });

        // Calcular la nota final si hay entradas válidas
        if (contador > 0) {
            const notaFinal = suma / contador; // Promedio
            // Asignar el resultado a la última celda de la fila
            fila.lastElementChild.querySelector("input").value = notaFinal.toFixed(2);
        } else {
            fila.lastElementChild.querySelector("input").value = ''; // Limpiar si no hay entradas
        }
    });
}

// Agregar un evento para calcular la nota final cuando se cambie algún input
document.querySelectorAll("input[type='number']").forEach(input => {
    input.addEventListener('input', calcularNotaFinal);
});















// modulo.js
exports.suma = (a, b) => a + b;

// index.js
const modulo = require('./modulo');
console.log(modulo.suma(2, 3)); // Imprime 5