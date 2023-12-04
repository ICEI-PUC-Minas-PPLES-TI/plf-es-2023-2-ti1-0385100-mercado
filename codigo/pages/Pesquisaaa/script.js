document.addEventListener("DOMContentLoaded", function() {
  var produtos = []; // Variável para armazenar os produtos

  // Função para carregar e exibir os produtos
  function carregarProdutos() {
    fetch('https://jsonserver-tiaw.igorfernandesca.repl.co/produtos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o arquivo JSON');
        }
        return response.json();
      })
      .then(data => {
        produtos = data; // Recebe os produtos do JSON
        exibirLista(produtos); // Chama a função para exibir os produtos
      })
      .catch(error => {
        console.error('Erro ao carregar produtos:', error);
      });
  }

  // Função para exibir a lista de produtos
  function exibirLista(produtos) {
    var listaHTML = "";
    var lista = document.getElementById("lista-produtos"); // ID da lista no HTML

    produtos.forEach(produto => {
      listaHTML += `<li>${produto.nome} - ${produto.preço}</li>`;
    });

    lista.innerHTML = listaHTML;
  }

  // Chama a função para carregar os produtos do arquivo JSON ao carregar a página
  carregarProdutos();

  var pesquisa = document.getElementById("pesquisa");

  pesquisa.onkeyup = function(e) {
    var termo = this.value.toLowerCase();
    var lista = document.getElementById("lista-produtos");
    var itensLista = lista.getElementsByTagName('li');

    for (var i = 0; i < itensLista.length; i++) {
      var produtoNome = itensLista[i].textContent.toLowerCase();
      if (produtoNome.includes(termo)) {
        itensLista[i].style.display = "block";
      } else {
        itensLista[i].style.display = "none";
      }
    }
  };
});

