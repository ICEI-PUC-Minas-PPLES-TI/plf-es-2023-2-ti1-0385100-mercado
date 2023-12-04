document.addEventListener('DOMContentLoaded', () => {
  const produtoContainer = document.getElementById('produtoContainer');

  fetch('https://jsonserver-tiaw.igorfernandesca.repl.co/produtos')
    .then(response => response.json())
    .then(data => {
      data.forEach(produto => {
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = produto.nome;
        link.onclick = () => abrirPopup(produto);

        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.appendChild(link);

        produtoContainer.appendChild(divProduto);
      });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
});

function abrirPopup(produto) {

  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popupTitulo').innerText = produto.nome;
  document.getElementById('popupDescricao').innerText = produto.descriçao;
  document.getElementById('popupPreco').innerText = produto.preço;
  document.getElementById('popupCategoria').innerText = produto.categoria;
  document.getElementById('popupMercado').innerText = produto.mercado;
  document.getElementById('popupImage').src = produto.imagem;
}

function fecharPopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

// modal.show();