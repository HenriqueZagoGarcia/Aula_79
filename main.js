/* Declarar um array vazio para armazenar os nomes */
arrayNomes = [];


function submit() /* Chamar a função submit */
{
    var nome1 = document.getElementById("aluno1").value;
    var nome2 = document.getElementById("aluno2").value;
    var nome3 = document.getElementById("aluno3").value;
    var nome4 = document.getElementById("aluno4").value;

    arrayNomes.push(nome1); /* Explicação: a função .push adiciona uma variável ao final da array */

    /* Adicionar as variáveis nome2 ao nome4 dentro da arrayNomes */
    arrayNomes.push(nome2);
    arrayNomes.push(nome3);
    arrayNomes.push(nome4);

    console.log(arrayNomes); /* Chamar a arrayNomes dentro do console */

    document.getElementById("displayName").innerHTML = arrayNomes;
    document.getElementById("enviar").style.display = "none";
    document.getElementById("organizar").style.display = "inline-block";

}

function sorting()
{
    arrayNomes.sort();
    console.log(arrayNomes);
    document.getElementById("displayName").innerHTML = arrayNomes;
}