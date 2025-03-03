// script.js file

//const { Button } = require("../Scripts/bootstrap.bundle");

var qr = false;
var first = true;
var mensage = "";

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
    actualizar_pantalla();
    const loading = document.getElementById("loading");
    const no_boleta = document.getElementById("qr_resultado");

    no_boleta.readOnly = true;
    loading.innerHTML = "Leiendo codigo 1/4...";
    function onScanSuccess(decodeText, decodeResult) {
        const texto = document.getElementById("qr_resultado");

        //Cambiar la logica del while cuando se tenga ya la bandera asignada para separar los datos
        let x = 0;
        mensaje = "";
        while (decodeText[x] != "@") {
            mensaje = mensaje + decodeText[x];
            x++;
        }
        texto.value = mensaje;
        //texto.value = decodeText

        //actualizar_interface();
        mensage = decodeText;
        //actualizar_interface();
        //save_data(decodeText);
    }
    loading.innerHTML = "Leiendo codigo 2/4...";
    try {
        let htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbox: 250 });
        loading.innerHTML = "Leiendo codigo 3/4...";
        htmlscanner.render(onScanSuccess);
        loading.innerHTML = "Leiendo codigo 4/4...";
        //actualizar_interface();
        actualizar_pantalla();
        if (loading) {
            loading.remove();
        }
    } catch (ex) {
        loading.innerHTML = ex
    }
});

function save_data() {
    const texto = document.getElementById("qr_resultado");
    if (texto.value != "") {
        localStorage.setItem("boleta", mensage);
        alert("Boleta escaneada exitosamente");
    } else {
        alert("No se ha escaneado ninguna boleta");
    }
}

async function actualizar_pantalla() {
    const intervalId = setInterval(function () {
        try {
            actualizar_interface();
        } catch (e) {
            console.error("Error en actualizar_interface:", e);
            clearInterval(intervalId); // Detener el intervalo en caso de error
        }
    }, 500);
}


function actualizar_interface() {
    const tmp_code = document.getElementById("codigo");
    /////////////////////////////////
    const link = document.getElementById("html5-qrcode-anchor-scan-type-change");
    const alerta = document.getElementById("my-qr-reader__header_message");
    const qr_container = document.getElementById("my-qr-reader");   ///
    const info = qr_container.getElementsByTagName("div");
    const more_info = info[0].getElementsByTagName("img");
    const button_camera = document.getElementById("html5-qrcode-button-camera-permission");
    const button_img = document.getElementById("html5-qrcode-button-file-selection");
    const div_1 = document.getElementById("my-qr-reader__dashboard_section");
    const img_container = div_1.getElementsByTagName("div")[3];
    const img_label = img_container.getElementsByTagName("div")[0];
    const btn_start_scann = document.getElementById("html5-qrcode-button-camera-start");
    const btn_stop_scann = document.getElementById("html5-qrcode-button-camera-stop");

    tmp_code.textContent = qr_container.innerHTML;

    button_camera.innerHTML = "Activar Camara";
    button_camera.className = "input button";
    button_img.innerHTML = "Buscar imagen";
    button_img.className = "input button";
    qr_container.style.border = "0px";
    qr_container.style.width = "300px";
    link.innerHTML = "usar otra opcion";

    if (more_info && first) {
        more_info[0].remove();
        first = false;
    } else {
        console.clear();
        console.log("el elemento no existe o ya fue eliminado")
    }

    if (alerta) {
        if (alerta.innerHTML === "Requesting camera permissions...") {
            alerta.innerHTML = "Solicitando permisos para usar la camara";
        } else if (alerta.innerHTML === "NotFoundError: Requested device not found" || alerta.innerHTML==="") {
            alerta.innerHTML = "No se encontro ninguna camara";
        }
    }

    if (btn_start_scann) {
        btn_start_scann.className = "html5-qrcode-element input button";
        btn_start_scann.innerHTML = "Escanear";
    }

    if (btn_stop_scann) {
        btn_stop_scann.className = "html5-qrcode-element input button";
        btn_start_scann.innerHTML = "Parar de escanear";
    }

    if (img_label) {
        img_label.innerHTML = "O arrastra una imagen";
    }
}