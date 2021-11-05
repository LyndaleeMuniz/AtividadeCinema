// função para subtrair
function maioridade() {
    
// Declaração variavel
var nome = document.getElementById('nome').value; 
var idade = document.getElementById('idade').value;

// verificar idade
if (idade >=16){
// alert ('Entrada liberada.');

// outra forma

// ***Text HTML***
document.getElementById('result').innerHTML = '<div style="color:#00f;"> Entrada liberada. Bom Filme !!!';

}else{
// alert ('Entrada poribida')

// outra forma

// ***Text HTML ***
document.getElementById('result').innerHTML = ' <div style="color: #f00;">Entrada não autorizada!!!!';
}

}
    
// função bem vindo

function boasvindas(){
// exibe a mensagem de boas vindas na tela
alert ('Bem vindo. Compre o ingresso para o nosso filme');

}
