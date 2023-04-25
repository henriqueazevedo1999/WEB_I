// função para armazenar o conteúdo do campo "Login" no localStorage
function autenticar() {
    // obter o valor dos campos de login e senha
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    
    // verificar se os campos estão preenchidos
    if (login !== "" && senha !== "") {
      // armazenar o valor do campo "Login" no localStorage
      localStorage.setItem("login", login);
      
      // redirecionar para a página inicial
      window.location.href = "index.html";
    } else {
      // exibir mensagem de alerta se os campos não estiverem preenchidos
      alert("Informe os dados de autenticação");
    }
  }
  
  // função para exibir o status de autenticação do usuário no cabeçalho
  function exibirStatusAutenticacao() {
    // obter o campo de status de autenticação
    let status = document.getElementById("status-autenticacao");
    
    // verificar se o usuário está autenticado
    if (localStorage.getItem("login") !== null) {
      // exibir o nome do usuário e a foto fictícia
      let login = localStorage.getItem("login");
      status.innerHTML = `Usuário: ${login} <img src="user.png" alt="Foto do usuário">`;
    } else {
      // exibir mensagem indicando que o usuário não está autenticado
      status.innerHTML = "Usuário não autenticado";
    }
  }
  
  // função para mudar a aparência da página com base na escolha do usuário
  function mudarAparencia() {
    // obter o campo de escolha de aparência
    let escolha = document.getElementById("escolha-aparencia");
    
    // verificar qual opção foi selecionada
    if (escolha.value === "custom") {
      // alterar a cor de fundo, o tipo de fonte e as cores de texto
      document.body.style.backgroundColor = "lightblue";
      document.body.style.fontFamily = "Arial, sans-serif";
      let elementos = document.querySelectorAll("p, div");
      elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = "white";
        elemento.style.color = "black";
      });
    } else {
      // restaurar a aparência original da página
      document.body.style.backgroundColor = "";
      document.body.style.fontFamily = "";
      let elementos = document.querySelectorAll("p, div");
      elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = "";
        elemento.style.color = "";
      });
    }
  }
  