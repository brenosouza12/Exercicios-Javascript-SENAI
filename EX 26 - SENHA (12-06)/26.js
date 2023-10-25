
let username = prompt("Digite o nome de usuário:");
let password = prompt("Digite a senha:");


    if (username === "admin" && password === "123") {

        alert("Login efetuado!");

}      else if (username !== "admin" && password !== "123") {

           alert("Nome de usuário e senha incorretos!");

}             else if (username !== "admin") {

               alert("Nome de usuário incorreto!");

}                 else {

                     alert("Senha incorreta!");
                     
}
