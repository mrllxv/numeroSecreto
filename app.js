alert("Boas Vindas ao Jogo do Número Secreto! ");

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute = prompt("Digite um número de 1 a 20:");

let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt(`Digite um número de 1 a ${numeroMaximo}:`);
    if(chute == numeroSecreto){
        break;
    }
    else {
        if (chute > numeroSecreto){
            alert(`O Número Secreto é menor que ${chute}`);
        }
        else{
            alert(`O Número Secreto é maior que ${chute}`);
        } 
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns! Você acertou! O Número Secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);




