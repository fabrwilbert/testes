
//DESESTRUTURAÇÃO DE OBJETOS:
//modo antigo 
const user = {name: "João", age: 25};
const name = user.name;
const age = user.age;
console.log(name);
console.log(age);

//modo do ES6
const usuario = {nome: "Paulo", idade: 35};
const {nome, idade} = usuario;
console.log(nome);
console.log(idade);

//----------------------

//PARÂMETROS PADRÃO:
//modo antigo
const saudacao = (nome) =>{
    if (nome === undefined){
        nome = "Visitante"
    }
    return `Olá, ${nome}.`
}

console.log(saudacao())
console.log(saudacao("Ana"))

//modo ES6
const nsaudacao = (nome = "visitante") =>
    `Olá, ${nome}!`;
console.log(nsaudacao());
console.log(nsaudacao("Carlos"))

//-------------------------

//Criando uma promisse para testar a programação assincrona
const promessa = new Promise((resolve, reject)=>{
    let sucesso = false; //simulando a resposta

    setTimeout(() =>{
        if (sucesso){
            resolve("Operação bem-sucedida!")
        }else{
            reject("Ocorreu um erro.")
        }
    }, 2000);
});

promessa
    .then(resultado => console.log(resultado)) // se bem sucedida "true", mostra operação bem-sucedida
    .catch(erro => console.error(erro)) // se não "false", mostra ocorreu um erro
    .finally(() => console.log("Processo finalizado!")); //finaliza o processo mesmo com erro.

//------------------

//UTILIZANDO ASYNC E AWAIT

//método tradicional:
function buscarDados(){
    return new Promise(resolve =>{
        setTimeout(()=>
            resolve("Dados Carregados"),
            2000);       
    });
}

buscarDados()
.then(dados => console.log(dados)); 

//com async e await
function buscarDadosN(){
    return new Promise(resolve =>{
        setTimeout(()=>
            resolve("Dados Carregados"),
            2000);       
    });
}

async function main() {
    const resultado = await buscarDadosN();
    console.log(resultado)
}
main();


//PROGAMAÇÃO FUNCIONAL

// Estilo imperativo.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const npares = [];

for (let i=0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
        npares.push(numeros[i]);
    }
}
console.log(npares);

//Estilo Declarativo
const numerosN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numerosN
    .filter(n => n % 2 === 0)
    .map(n => n * 2);

console.log(resultado);

//HIGHER ORDER FUNCTIONS
function aplicarOperacao(numero, operacao){
    return operacao(numero);
}
const dobrar = x => x * 2;

console.log(aplicarOperacao(21, dobrar));

//-----------------

//função map
const precos = [4.19, 7.72, 42.29];
const precosConvertidos = precos.map((preco) => preco * 5,74);
console.log(precosConvertidos);

//exemplo com todolist
const tarefas = ["compra pão", "estudar javascript", "pagar contas", "fazer exercícios"];
const listaTarefasHTML = tarefas.map(tarefa => `<li>${tarefa}</li>`);
console.log(listaTarefasHTML);

//-----------------

//função filter()
const numerosh = [2, 35, 42, 9, 20, 3];
const maioresQueDez = numerosh.filter(n => n > 10);
console.log(maioresQueDez);

// função reduce()
//sem reduce
const valores = [10, 20, 12];
let somaTotal = 0;

valores.forEach((numero) => {
    somaTotal = somaTotal + numero;
});
console.log(somaTotal);

//com reduce()
const valoresN = [10, 20, 12];
const somaTotalN = valoresN.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(somaTotalN);

//função some()
const numerosY = [10, 20, 30, 42];
const temMaiorQue50 = numerosY.some(n => n > 50);
console.log(temMaiorQue50);

//função every()
const todosPositivos = numerosY.every(n => n > 0);
console.log(todosPositivos);

//Rest Operator
function multiplicarTudo(...numeros){
    return numeros.reduce((produto, numero) =>
    produto * numero, 1)
}
console.log(multiplicarTudo(2, 3, 7, 2))