// CREATE - UPDATE
function save() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("textArea").value;
    console.log(name, message);
    localStorage.setItem(name, message);
}


// READ
function load() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("textArea");
    const data = localStorage.getItem(name);
    message.value = data
    console.log("Registro guardado como: " + name)
}

function search() {
    const data = localStorage;
    console.log(data);
}

function find() {
    const margin = 5;
    const data = localStorage;
    const message = document.getElementById("textArea").value;
    let ar = []

    for (let x = (data.length - 1); x >= 0; x--) {
        const key = data.key(x);
        const value = data.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        if (parseInt(message, 10) < (parseInt(value, 10) + margin) && parseInt(message, 10) > (parseInt(value, 10) - margin)) {
            ar.push(key);
        }
    }

    console.log("********************************")
    console.log(ar)
    console.log("********************************")

    for (let x = (ar.length - 1); x >= 0; x--) {
        const value = data.getItem(ar[0]);
        console.log(value);
    }
}


// DELETE
function del() {
    const name = document.getElementById("name").value;
    localStorage.removeItem(name);
    console.log("Registro borrado")
}

function del_all() {
    const data = localStorage
    console.log("Eliminando datos...");
    for (let x = (data.length - 1); x >= 0; x--) {
        const key = data.key(x);
        const value = data.getItem(key);
        console.log(`Clave: ${key}, Valor: ${value}`);
        localStorage.removeItem(key);
    }
    console.log("Datos eliminados")
}
