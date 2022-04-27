const inNombre = document.getElementById('inName')
const inEmail = document.getElementById('inEmail')
const inPass = document.getElementById('inPass')
const check = document.getElementById('check') 
const btn = document.getElementById('boton')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Se envio el formulario")
})

let automatizacion = () => {
    setTimeout(() => {
        setTimeout(() => {
            inNombre.value = "Tomas Wettstein"
            setTimeout(() => {
                inEmail.value = "tomas.fwettstein@gmail.com"
                setTimeout(() => {
                    inPass.value = "12345!"
                    setTimeout(() => {
                        check.click()
                        setTimeout(() => {
                            btn.click()
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

setTimeout(() => {
    automatizacion()
}, 4000);
