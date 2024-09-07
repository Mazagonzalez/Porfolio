function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function counter(id, time) {
    let count = 0;
    const target = time;
    const duration = 1500; // Duración total en milisegundos (1.5 segundos)
    const increment = target / (duration / 100); // Incremento por intervalo de 100ms

    let counterElement = document.getElementById('counter-' + id);

    const interval = setInterval(() => {
        count += increment;

        if (count >= target) {
            count = target;
            clearInterval(interval); // Detener el contador cuando llegue al objetivo
        }

        // Usar formato personalizado
        counterElement.textContent = formatNumber(Math.floor(count)); 

    }, 100); // Actualizar cada 100 ms (0.1 segundos)
}

window.counter = counter;
