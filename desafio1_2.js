const empresa = {
  nome: `Rocketseat`,
  cor: `roxo`,
  foco: `Progamacao`,
  endereco: {
    rua: `Rua Guilherme Gembala`,
    numero: 260,
  },
};

// console.log(" A empresa", empresa.nome, "está localizada", "em", empresa.endereco)
// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

const programador = {
  nome: `Carlos`,
  idade: 32,
  especialidades: [
    { nome: `C++`, especialidade: `Desktop` },
    { nome: `JavaScript`, especialidade: `Web/Mobile` },
  ],
};
console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a  tecnologia ${programador.especialidades[0].nome} com especialidade em ${programador.especialidades[0].especialidade} `
);

// console.log(programador.especialidades[0])
