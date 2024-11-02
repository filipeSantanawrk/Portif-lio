const texto = "Projetos";
let index = 0;

function digitar() {
    if (index < texto.length) {
        document.getElementById("ProjetosJS").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 150); // Ajuste a velocidade do efeito alterando o valor em milissegundos
    }
}

digitar();

