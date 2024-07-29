function numbersGenerator(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function displayRandomNumbers() {
    let numerosElement = document.getElementById("numeros");
    let randomNumbers = [];

    while (randomNumbers.length < 6) {
        let randomNumber = numbersGenerator(1, 60);
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    randomNumbers.sort((a, b) => a - b);
    numerosElement.textContent = randomNumbers.join(", ");
}

//A função displayRandomNumbers() cria uma lista (randomNumbers) de 6 números aleatórios.

//Cada número é gerado pela função numbersGenerator(1, 60) e adicionado à lista.

//A linha randomNumbers.sort((a, b) => a - b); utiliza o método sort do JavaScript para ordenar um array.

//A linha randomNumbers.join(", ") utiliza o método join do JavaScript para criar uma string que contém todos os elementos do array randomNumbers, separados por uma string especificada.

//É feito uma verificação para que não haja números repitidos no array.

//A linha randomNumbers.push(randomNumber); é usada para adicionar um novo elemento ao final do array randomNumbers.