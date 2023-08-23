function dobro(x) {
  alert("O DOBRO DE " + x + " É " + x * 2);
}

//dobro(5);

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

//dizerOla("Welber");

function soma(a, b, c, d) {
  alert("O resultado da soma é " + (a + b + c + d));
}

//soma(7, 6, 4, 1);

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function novoUsuario(nome, email, senha = "senha", tipo = "admin") {
  //quando for declarar valores padrão, sempre deixar por último
  const usuario = {
    nome, //mesmo que nome: nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Welber", "Welber@email.com", "121221");
novoUsuario("Welber", "welber@email,com", "123456");
