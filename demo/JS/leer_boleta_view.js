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
    function onScanSuccess(decodeText, decodeResult) {
        const texto = document.getElementById("qr_resultado");
        texto.value = decodeText;
        actualizar_interface();
    }
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        {
            fps: 10, qrbox: 250 // Corrección de 'qrbos' a 'qrbox'
        }
    );
    htmlscanner.render(onScanSuccess);
    actualizar_interface();
    loading.remove();
});

function actualizar_interface() {
    const link = document.getElementById("html5-qrcode-anchor-scan-type-change");
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
    img_label.innerHTML = "O arrastra una imagen";
    qr_container.style.border = "0px";

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

    if (qr) {
        link.innerHTML = "Usar camara";
        qr = false;
    } else {
        link.innerHTML = "Buscar archivo";
        qr = true;
    }

    //img_label.innerHTML = "O arrastra una imagen";

}
