function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function counter(id, time) {
    let count = 0;
    let ms = 10;
    const target = time;
    const duration = 1500; // Duración total en milisegundos (1.5 segundos)

    if(time <= 30){
        ms = 200;
    }

    const increment = target / (duration / ms); // Incremento por intervalo de 100ms

    let counterElement = document.getElementById('counter-' + id);

    const interval = setInterval(() => {
        count += increment;

        if (count >= target) {
            count = target;
            clearInterval(interval); // Detener el contador cuando llegue al objetivo
        }

        counterElement.textContent = formatNumber(Math.floor(count)); 

    }, 100);
}

window.counter = counter;
