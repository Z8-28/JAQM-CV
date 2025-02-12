document.addEventListener("DOMContentLoaded", function () {
    read()
});


function read() {

    function onScanSuccess(qrMessage) {
        // Mostrar el resultado en el campo de entrada
        const miInput = document.getElementById("miInput");
        miInput.value = qrMessage;

        // Parar el escaneo
        html5QrCode.stop().then(() => {
            console.log("Escaneo detenido.");
        }).catch(err => {
            console.error("No se pudo detener el escaneo.", err);
        });
    }

    function onScanError(errorMessage) {
        // Manejar errores de escaneo aquí
        console.log("Error de escaneo:", errorMessage);
    }

    // Crear una instancia de html5-qrcode
    const html5QrCode = new Html5Qrcode("qr-reader");

    // Iniciar el escaneo de la cámara
    html5QrCode.start({ facingMode: "environment" }, {
        fps: 10,    // Fotogramas por segundo
        qrbox: 250  // Tamaño del cuadro de escaneo
    }, onScanSuccess, onScanError).catch(err => {
        console.error("No se pudo iniciar el escaneo.", err);
    });
}