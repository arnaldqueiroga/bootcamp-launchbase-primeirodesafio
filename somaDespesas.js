// const usuarios = [
//   {
//     nome: 'Salvio',
//     receitas: [115.3, 48.7, 98.3, 14.5],
//     despesas: [85.3, 13.5, 19.9],
//   },
//   {
//     nome: 'Marcio',
//     receitas: [24.6, 214.3, 45.3],
//     despesas: [185.3, 12.1, 120.0],
//   },
//   {
//     nome: 'Lucia',
//     receitas: [9.8, 120.3, 340.2, 45.3],
//     despesas: [450.2, 29.9],
//   },
// ];


// function calculaSaldo(receitas, despesas) {
//   // preciso usar a função somaNumero
//   let somaReceitas = somaNumeros(receitas)
//   let somaDespesas = somaNumeros(despesas)

//   // deve retornar despesas - receitas
//   return somaReceitas - somaDespesas
// }

// function somaNumeros(numeros) {
//   // Soma todos números dentro do array "numeros"
//   let soma = 0;
//   for (let numero of numeros) {
//     soma = soma + numero;
//   }
//   return soma;
// }
// const soma = somaNumeros(usuarios[0].despesas)
// // console.log(soma)

// // percorre o array de usuários
// for (let usuario of usuarios){
//   // para cada usuário
//   // chame uma função chamada calculaSaldo
//    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
//    console.log(saldo.toFixed(2))

//    const saldoPositivo = saldo >= 0
//    if (saldoPositivo){
//      console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
//    } else {
//      console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`);
//    }

// }

const usuarios = [
  {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0],
  },
  {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
];


function calculaSaldo(receitas, despesas) {
  let somaReceitas = somaNumeros(receitas)
  let somaDespesas = somaNumeros(despesas)

  return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
   let soma = 0;
   for (let numero of numeros) {
     soma = soma + numero;
   }
   return soma;
}

   const soma = somaNumeros(usuarios[0].receitas);
  //  console.log(soma);


// Percorrer o array de usuários
for (let usuario of usuarios){
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas);
   console.log(saldo.toFixed(2));


}