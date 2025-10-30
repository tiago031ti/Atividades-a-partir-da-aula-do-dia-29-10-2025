let x = 10;
let y = 20;
console.log("O valor de x é: ",x);
console.log("O valor de y é: ",y);
console.log ("Soma: " ,x + y);
console.log ("Subtração: ", x - y);
console.log ("Divisão :", x / y);
console.log ("Multiplicação :", x * y);
console.log ("Resto :", x%y);
console.log ("Exponenciação :", x**y);

///////

x = 30;
y = 40;
console.log("Operador ==", x==y);
x = 40;
y = 40;
console.log("Operador ==", x==y);
x = 30;
y = 40;
console.log("Estritamente igual ===",x===y );
x = 40;
y = 40;
console.log("Estritamente igual ===",x===y );
x =30;
y = 40;
console.log("Diferente de !=", x!=y );
console.log("Estritamente diferente de !==", x!=y );
console.log("Maior que >", x>y );
console.log("Menor que <", x<y );
console.log("Maior/igual que >=", x>=y );
console.log("Menor/igual que <=", x<=y );

//

console.log ("AND: ", true && false);
console.log ("OR: ", true || false);
console.log ("NOT: ",  !true);


///

let nota1 = 50;



if (nota1>=70){
    console.log("Aprovado");

}else if(nota1>=50 && nota1<70){
    console.log("Recuperação");

}else{
    console.log("Reprovado");
}


////

let mes = 8;
switch (mes) {
    case 1:
        console.log("Janeiro");
        break;

    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Nenhum mes correspondente")

}


let numero = 0;

while(numero<=20){
    if (numero % 2 ==0){
        console.log(numero);
    }
numero++;
}



let cidades = ["SP","RJ","BH"];

for (let i = 0; i < cidades.length; i++){
    console.log(cidades[i]);
}

for (let i =10; i >= 1 ; i--){
    console.log(i);
}



