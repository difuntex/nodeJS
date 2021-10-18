//Função pura, funções diretas
const verfica_se_e_maior_que = (entrada1, entrada2) => entrada1 > entrada2;

console.log(verfica_se_e_maior_que(13, 13));

//valores imutáveis, uma constante não pode ser substituida mesmo se não gerarem erros
const sobreNome = "Silveira";

sobreNome.replace("Silveira", "Souza");

console.log(sobreNome); //'Silveira'

// removendo espaços em branco e adicionando no array filePaths
const files = ["Atabir.txt ", "Icatu.txt", "   ", "Objetiva.txt"];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/ArquivosVenda/${fileName}`;
    filePaths.push(filePath);
  }
}
for (let i in filePaths) {
  console.log(filePaths[i]);
}
// o metódo in exibe os indices do array
for (let prop in ["a", "b", "c"]) {
  console.log(prop);
}
// o método of exibe o valor de cada elemento no array

for (let val of ["a", "b", "c"]) {
  console.log(val);
}
//ja com o forEach consigo acessar tanto o indice quanto o valor de cada elemento do array
["a", "b", "c"].forEach((val) => console.log(val));

["a", "b", "c"].forEach((val, i) => console.log(i));

//simplesmente apagando espaços de uma string
const removeSpaces = (str) => str.replace(/\s/g, "");
const palavra = "hel lo wor ld";
console.log("Palavra sem espaços: " + removeSpaces(palavra));

//emulando uma jogada de dado
const throwdice = () => ~~(Math.random() * 6) + 1; /// o núemro 6 representa o teto do número resultante da função
console.log(throwdice());

// gerando um array de inteiuros aleatórios gerados baseados nos limiares informados
const randomArrayInRange = (min, max, n) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
console.log("Array aleatorio: " + randomArrayInRange(1, 100, 5));

// pegando  o dia da semana de um objeto .date
const date = new Date();
const getWeekday = (date) =>
  ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"][
    date.getDay()
  ];
console.log("Hoje é " + getWeekday(date));

// imprimindo um 0 negativo
console.log(-0);
// pegando apenas a parte inteira de um número real
console.log(Math.trunc(13.37));
