
function fnJogo() {
    let numeroMagico = Math.floor(Math.random() * 10) + 1

    let chute = document.getElementById("valor").value

    if (chute == numeroMagico) {
        document.getElementById("resultado").innerText = `Acertou 😊 O número era ${numeroMagico}`
    } else {
        document.getElementById("resultado").innerText = "Errou 🤣 Tente novamente!"
    }
}
