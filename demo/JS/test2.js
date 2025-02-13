// script.js file

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
    function onScanSuccess(decodeText, decodeResult) {
        //alert("You Qr is : " + decodeText, decodeResult);
        const texto = document.getElementById("qr_resultado");
        texto.innerHTML = decodeText;
    }

    /*let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );*/

    const htmlscanner = document.getElementById("my-qr-reader")
    htmlscanner.render(onScanSuccess);

});