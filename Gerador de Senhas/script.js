function gerarSenha(){

let tamanho = document.getElementById("tamanho").value;

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

let senha = "";

for(let i = 0; i < tamanho; i++){

senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

}

document.getElementById("senha").textContent = senha;

}