/*const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const resultado = document.getElementById("resultado");

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        video.srcObject = stream;
        video.play();
        escanearQR();
    })
    .catch(err => console.error("Error al acceder a la camara: ", err));

function escanearQR() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.getIMage(video, 0, 0, canvas.width, canvas.height)
    }
}*/


const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const resultado = document.getElementById("resultado");

navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
        video.srcObject = stream;
        video.play();
        escanearQR();
    })
    .catch(err => console.log("Error al acceder a la camara: ", err));

function escanearQR() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImageData(video, 0, 0, canvas.width, canvas.height);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        let qrCode = jsQR(imageData.data, imageData.width, imageData.height);

        if (qrCode) {
            resultado.textContent = qrCode.data;
            console.log("Codigo QR detectado: ", qrCode.data);
        }
    }
    requestAnimationFrame(escanearQR);
}