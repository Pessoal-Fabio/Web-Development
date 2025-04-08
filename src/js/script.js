//DECLARAÇÃO E VARIAVEIS

var nome ="Fiap";
console.log(nome)

let idade=22;
console.log(idade)

const sobrenome ="cidade";
console.log(sobrenome)

let aula;
console.log(aula)

let valor =null;
console.log(valor)

let exemplo1 ={};

let exemplo2 ={};

//TIPOS VARIAVEIS
let exemplo3 =10;
console.log(typeof exemplo3)

let exemplo4="Aula"
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["huguinho","zezinho","luizinho"];
console.log(typeof exemplo6)

//CONVERSÕES

//float => inteiro
let numFloat =123.456;
console.log(parseInt(numFloat));

//string => float
let numString ="547.987";
console.log(parseFloat(numString));

//float => string

let numFloat1 =554.665;
console.log(numFloat1.toString());

let numInt=100;
console.log(numInt.toString())

//Metodos - Parte 1

//Length - Verifica o tamanho da string

let frase ="O mundo da tecnologia";
console.log(frase.length)

//indexOf - retorna um trecho de um texto

let texto ="Programação sustenstavel"
console.log(texto.indexOf("a"))

//slice retorna parte de um texto apontando o inicio e o final

let info="processamento de ponta"
console.log(info.slice(0,13))

//OPERADORES ARITIMETICO

const num1 =10;
const num2 =20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//OPERADORES LÓGICOS

const num3 =20;
const num4 =30;

console.log(num3 > num4);
console.log(num3 < num4 && num4 < 50);
console.log(num3 > num4 || num4 > num3);
console.log(num3 == num4 || num4 <= num3)

// OPERADORES DE COMPARAÇÃO

const num5 =25
const num6 =35

console.log(num5 == num6) //compara
console.log(num5 === num6) //compara e verifica o tipo de variavel
console.log(num5!= num6) //diferente

//ESTRUTURA CONDICIONAL

//IF

let valor1=100;

if(valor1 == 100){
console.log("é verdadeiro")
}

//if/else

let valor2=100;

if(valor2 == 100){
    console.log("Valor Correto")
}else{
    console.log("Valor Errado")
}

// if/else - encadeado ou aninhado

let idade1 = 18;

if (idade1 < 14) {
    console.log("Não pode entrar na balada");
}
else if (idade1 >= 14 && idade1 < 18) {
    console.log("Pode Entrar e curtir");
}
else if (idade1 > 50 && idade1 < 70) {
    console.log("Você não tem idade para isso");
}
else {
    console.log("Fica em casa assistindo tv");
}

// CONDIÇÃO TERNÁRIA

let valor3 = 300;

let resultado = valor3 == 300 ? "Certo" : "Errado"; // ? é if, : é else
console.log(resultado);

//SWITCH CASE

let time="Corinthians"

switch(time){
    case "Corinthians":
        console.log("Melhor Time")
        break;
    case "São Paulo":
        console.log("Não é um time")
        break;
    case "Palmeiras":
        console.log("Não tem Mundia")
        break;
    default:
        console.log("Nenhuma das opções")
}

//ESTRUTURA DE LAÇO DE REPETIÇÃO

for(let i=0;i<10;i++){
    console.log("O valor de I é :", i)
}

//WHILE

let W=0

while(W<=10){
    console.log("O valorde W é ",W)
    W++;
}

//do While

let Z= 10;

do{
    console.log("do while é", Z)
    Z++;
}while(Z <=100)