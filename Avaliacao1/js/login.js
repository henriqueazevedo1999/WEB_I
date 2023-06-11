function validaLogin() {
    if (document.cookie == null || document.cookie == '') {
        document.getElementById("usuarioLogado").innerText = "Usuário não informado";
        document.getElementById("imageLogado").style.visibility = 'hidden';
        return;
    }

    const auxStr = document.cookie.substring(6, document.cookie.length);
    document.getElementById("usuarioLogado").innerText = auxStr;
    document.getElementById("imageLogado").style.visibility = 'visible';
}

function autenticar() {
    // resetaCookie();
    let login = document.getElementById('login').value;
    let senha = document.getElementById('password').value;

    if (login == null || login == "") {
        alert("Login deve ser informado")
        return;
    }

    if (senha == null || senha == "") {
        alert("Senha deve ser informada")
        return;
    }

    document.cookie = "login=" + login;//ver se n tem tempo de expiração
    window.location.href("/index");
}

function resetaCookie() {
    var date = new Date();
    document.cookie = 'login=; expires=' + date.toGMTString() + ';';
}

function habilitaAutenticacao() {
    var valido = document.getElementById("login").value && document.getElementById("password").value;
    const elemento = document.getElementById("autentica");

    if (valido) {
        elemento.classList.remove("btn-danger");
        elemento.classList.add("btn-dark");
        elemento.disabled = false;
    } else {
        elemento.classList.remove("btn-dark");
        elemento.classList.add("btn-danger");
        elemento.disabled = true;
    }
}
