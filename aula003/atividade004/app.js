// document.write("<h1>Testando</h1>")

let filmes = ['filme01.jpg', 'filme02.jpg', 'filme03.jpg','filme04.jpg', 'filme05.jpg', 'filme06.jpg']
let contador = 0
while(contador <filmes.length){

document.write(`<img src= 'imagens/${filmes[contador]}'>`)
contador = contador +1
}

