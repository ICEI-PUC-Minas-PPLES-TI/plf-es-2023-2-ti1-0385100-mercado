// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo realiza as operações de CRUD a partir de uma API baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para fazer o seu servidor, acesse o projeto do JSONServer no Replit, faça o
// fork do projeto e altere o arquivo db.json para incluir os dados do seu projeto.
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//
// Autor: Rommel Vieira Carneiro
// Data: 03/10/2023

// URL da API JSONServer - Substitua pela URL correta da sua API
const apiUrl = "https://jsonserver-tiaw.igorfernandesca.repl.co/categorias";

function displayMessage(mensagem) {
  msg = document.getElementById("msg");
  msg.innerHTML = '<div class="alert alert-warning">' + mensagem + "</div>";
}

function readCategoria(processaDados) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      processaDados(data);
    })
    .catch((error) => {
      console.error("Erro ao ler categorias via API JSONServer:", error);
      displayMessage("Erro ao ler categorias");
    });
}

function createCategoria(categoria, refreshFunction) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Categoria inserida com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao inserir categoria via API JSONServer:", error);
      displayMessage("Erro ao inserir categoria");
    });
}

function updateCategoria(id, categoria, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoria),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Categoria alterada com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao atualizar categoria via API JSONServer:", error);
      displayMessage("Erro ao atualizar categoria");
    });
}

function deleteCategoria(id, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Categoria removida com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao remover categoria via API JSONServer:", error);
      displayMessage("Erro ao remover categoria");
    });
}
