let angulo1 = 80;
let angulo2 = 80;
let angulo3 = 80;

let soma = angulo1 + angulo2 + angulo3;
let todosAngulosSaoPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (todosAngulosSaoPositivos){
    if(soma === 180){
        console.log('É um triângulo válido!')
    } else {
        console.log('Não é um triângulo válido!');
    };
}else {
    console.log('Ângulo inválido');
}