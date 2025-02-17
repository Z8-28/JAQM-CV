// script.js file

var qr = false;
var first = true;

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    // If found you qr code
    const loading = document.getElementById("loading");
    const no_boleta = document.getElementById("qr_resultado");

    no_boleta.readOnly = true;
    loading.innerHTML = "Leiendo codigo 1/4...";
    function onScanSuccess(decodeText, decodeResult) {
        const texto = document.getElementById("qr_resultado");
        texto.value = decodeText;
        actualizar_interface();
    }
    loading.innerHTML = "Leiendo codigo 2/4...";
    let htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbox: 250 });
    loading.innerHTML = "Leiendo codigo 3/4...";
    htmlscanner.render(onScanSuccess);
    loading.innerHTML = "Leiendo codigo 4/4...";
    actualizar_interface();
    if (loading) {
        loading.remove();
    }
});

function actualizar_interface() {
    const link = document.getElementById("html5-qrcode-anchor-scan-type-change");
    const alert = document.getElementById("my-qr-reader__header_message");
    const qr_container = document.getElementById("my-qr-reader");
    const info = qr_container.getElementsByTagName("div");
    const more_info = info[0].getElementsByTagName("img");
    const button_camera = document.getElementById("html5-qrcode-button-camera-permission");
    const button_img = document.getElementById("html5-qrcode-button-file-selection");
    const div_1 = document.getElementById("my-qr-reader__dashboard_section");
    const img_container = div_1.getElementsByTagName("div")[3];
    const img_label = img_container.getElementsByTagName("div")[0];


    button_camera.innerHTML = "Activar Camara";
    button_camera.className = "input button";
    button_img.innerHTML = "Buscar imagen";
    button_img.className = "input button";
    qr_container.style.border = "0px";
    qr_container.style.width = "300px";
    link.innerHTML = "usar otra opcion";

    if (more_info && first) {
        more_info[0].remove();
    } else {
        console.clear();
        console.log("el elemento no existe o ya fue eliminado")
    }

    if (first) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            actualizar_interface();
        });
        first = false;
    }

    if (alert) {
        alert.innerHTML = "No se encontro ninguna camara";
    }

    if (img_label) {
        img_label.innerHTML = "O arrastra una imagen";
    }

}