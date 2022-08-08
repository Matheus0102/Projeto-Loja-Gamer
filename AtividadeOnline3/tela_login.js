function logar(){

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;

    if(nome == "matheus" && senha == "matheus"){
        alert('Login Efetuado com Sucesso');
        location.href = "../atividadePresencial3/index.html"
    }else{
        alert('Usuario ou senha incorretos');
    }

}