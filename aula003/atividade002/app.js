function fnConverterValor(){
    let valorDigitado = 0
    valorDigitado = document.getElementById("valor").value
    valorEmDolar= valorDigitado / 5.29
    valorEmEuro= valorDigitado / 6.12
    document.getElementById("valorEmDolar").innerText ="$" + valorEmDolar.toFixed(2)
    document.getElementById("valorEmEuro").innerText ="€" + valorEmEuro.toFixed(2)
}
