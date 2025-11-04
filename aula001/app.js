// Boas práticas
/* Boas práticas em JavaScript incluem usar nomes descritivos e const e let, escrever funções pequenas e focadas, evitar variáveis globais, usar comentários para trechos complexos, tratar erros com try...catch e async/await, e manter a consistência no estilo do código.
*/

// Case sensitive
/* Sim, o JavaScript é uma linguagem case-sensitive, o que significa que diferencia letras maiúsculas de minúsculas. Isso afeta nomes de variáveis, funções, propriedades e outras palavras-chave; por exemplo, minhaVariavel é diferente de minhavariavel e Counter é diferente de counter. Para evitar erros, a capitalização deve ser consistente em todo o código. 
*/

// Sintaxe básica e comentário

/* A sintaxe básica do JavaScript envolve variáveis (declaradas com var, let ou const), tipos de dados como strings e números, e estruturas como if/else e funções. Comentários são usados para explicar o código e não são executados, utilizando // para linhas únicas ou /* */
/*/*

// Declaração de variáveis(var, let, const)
/* Em JavaScript, você pode declarar variáveis com let, const ou var, seguidas pelo nome da variável e, opcionalmente, um valor. let é usado para variáveis que podem ser reatribuídas, const para variáveis que não podem ser alteradas após a declaração (constantes), e var, uma forma mais antiga, tem escopo global ou de função. 
*/
let nome = "Diego"
const idade = 37

console.log("Olá " + nome + " sua idade é " + idade + " anos.")
console.warn("Atenção")
console.error("Erro")
console.info("Atenção")

// Console e Debug
/* Console é a interface de linha de comando nos navegadores onde você pode executar código JavaScript, ver mensagens de erro e exibir informações de debug. Debug é o processo de encontrar e corrigir erros (bugs) em um programa, usando ferramentas como o console.log() para exibir mensagens ou os depuradores integrados do navegador para pausar a execução do código, inspecionar variáveis e executar comandos. 
*/

//Tipos de dados
/* JavaScript tem 8 tipos de dados: 6 primitivos (String, Number, BigInt, Boolean, Undefined, Null, Symbol) e os objetos, que incluem Arrays e Functions. Os tipos primitivos são imutáveis e representam um único valor, como texto (String), números (Number), valores lógicos (Boolean), e valores indefinidos (Undefined). 
*/
//string
let cidade = "Americana"

//number
let salario = 2000

//bool
let fumante = false

//string
console.log(typeof cidade)
//number
console.log(typeof salario)
//boolean
console.log(typeof fumante)

// Operadores
//     Operador Atribuição
/* Os operadores de atribuição em JavaScript são usados para atribuir valores a variáveis, sendo o = o operador básico. Operadores combinados, como +=, *= e /=, permitem realizar uma operação e a atribuição do resultado à mesma variável em uma única etapa, simplificando o código. 
*/

//     Operadores aritméticos
/* Os operadores aritméticos em JavaScript permitem a manipulação de valores numéricos. Além dos operadores convencionais de adição, subtração, multiplicação e divisão, temos o operador de módulo (`%`) para obter o resto da divisão e o operador de exponenciação (`**`) para calcular potências.
*/

//     Operadores relacionais
/* Os operadores relacionais em JavaScript comparam dois valores e retornam um resultado booleano (true ou false). Os principais operadores são > (maior que), < (menor que), >= (maior ou igual a), <= (menor ou igual a), além dos operadores de igualdade e desigualdade (==, ===, !=, !==), in (verificar propriedade) e instanceof (verificar instância de objeto). 
*/

//     Operadores lógicos
/* Os operadores lógicos são elementos fundamentais da linguagem de programação JavaScript. Eles permitem realizar operações de comparação e combinação de valores booleanos, ou seja, valores que podem ser verdadeiros (true) ou falsos (false).
*/

// Estrutura
//     Estrutura de controle/decisão
/* As estruturas de controle de decisão em JavaScript são comandos que gerenciam o fluxo do código com base em condições, usando principalmente if/else e switch. A estrutura if executa um bloco de código se uma condição for verdadeira, enquanto if/else executa um bloco de código para true e outro para false. O switch é uma alternativa mais limpa para comparar um valor com múltiplos casos possíveis. 
*/

//     Laços de repetição
/* Em JavaScript, laços de repetição são usados para executar um bloco de código várias vezes, com os tipos principais sendo for, while e do...while. O for é ideal para um número predefinido de iterações, enquanto o while e o do...while são mais adequados quando o número de repetições depende de uma condição. Outros métodos úteis incluem for...of para iteráveis como arrays e o método forEach() para arrays. 
*/

// Arrays --> vetor
/* Arrays (ou vetores) em JavaScript são estruturas de dados que armazenam uma coleção de valores em uma única variável, acessíveis por um índice numérico a partir do zero. Eles são objetos com métodos e propriedades para manipular os dados, como push para adicionar elementos e length para obter o número de itens. Arrays permitem agrupar múltiplos itens relacionados, como uma lista de nomes de alunos, de forma organizada e eficiente. 
*/

// Funções personalizadas
/* Funções personalizadas em JavaScript são blocos de código reutilizáveis que você cria para realizar tarefas específicas, que podem incluir cálculos, manipulação de dados ou a adição de novas funcionalidades a outros aplicativos como o Excel ou Google Sheets. Para criar uma função, usa-se a palavra-chave function, seguida de um nome, parênteses () e chaves {} para o corpo do código.
*/
 