const apiUrl = "https://jsonserver-tiaw.igorfernandesca.repl.co/produtos";

function displayMessage(mensagem) {
  msg = document.getElementById("msg");
  msg.innerHTML = '<div class="alert alert-warning">' + mensagem + "</div>";
}

function readProduto(processaDados) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      processaDados(data);
    })
    .catch((error) => {
      console.error("Erro ao ler produtos via API JSONServer:", error);
      displayMessage("Erro ao ler produtos");
    });
}

function createProduto(produto, refreshFunction) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Produto inserido com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao inserir produto via API JSONServer:", error);
      displayMessage("Erro ao inserir produto");
    });
}

function updateProduto(id, produto, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Produto alterado com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao atualizar produto via API JSONServer:", error);
      displayMessage("Erro ao atualizar produto");
    });
}

function deleteProduto(id, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Produto removido com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao remover produto via API JSONServer:", error);
      displayMessage("Erro ao remover produto");
    });
}
