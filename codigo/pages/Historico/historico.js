function registrarVisualizacaoProduto(idProduto) {
    // Verifica se o usuário está logado
    if (usuarioCorrente.id) {
        // Obtém ou inicializa a lista de produtos visualizados pelo usuário
        usuarioCorrente.produtosVisualizados = usuarioCorrente.produtosVisualizados || [];

        // Adiciona o ID do produto à lista de produtos visualizados
        if (!usuarioCorrente.produtosVisualizados.includes(idProduto)) {
            usuarioCorrente.produtosVisualizados.push(idProduto);
        }

        // Atualiza os dados no sessionStorage
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

        const novaVisualizacao = {
            id: generateUUID(),
            userId: usuarioCorrente.id,
            produtoId: idProduto,
            dataVisualizacao: new Date().toLocaleDateString(),
        };
        if (!db_usuarios.historico) {
            db_usuarios.historico = [];
        }
        // Adiciona a nova visualização ao histórico no servidor
        if (db_usuarios && db_usuarios.historico) {
            db_usuarios.historico.push(novaVisualizacao);
        } else {
            console.error('Erro: db_usuarios ou db_usuarios.historico é indefinido');
        }
        atualizarDadosServidor();

        console.log(`Produto com ID ${idProduto} visualizado pelo usuário com ID ${usuarioCorrente.id}`);
    } else {
        console.log('Usuário não está logado. Não foi possível registrar a visualização do produto.');
    }
}

function atualizarDadosServidor() {
    // Atualiza os dados no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    const novaVisualizacao = {
        idUser: usuarioCorrente.id,
        idProduto: idProduto,
    };

    const url = `https://jsonserver-tiaw.igorfernandesca.repl.co//historico`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaVisualizacao),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Dados atualizados no servidor:', data);
        })
        .catch(error => {
            console.error('Erro ao atualizar dados no servidor:', error);
        });
}

function limparDadosUsuarioCorrente() {
    delete usuarioCorrente.senha;
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
}

document.addEventListener('DOMContentLoaded', () => {
    const dadosDiv = document.getElementById('dados');

    const usuarioLogadoString = sessionStorage.getItem('usuarioCorrente');
    const usuarioLogado = usuarioLogadoString ? JSON.parse(usuarioLogadoString) : null;

    if (usuarioLogado && usuarioLogado.produtosVisualizados) {
        fetch('https://jsonserver-tiaw.igorfernandesca.repl.co/produtos')
            .then(response => response.json())
            .then(produtos => {
                // Filtrar produtos visualizados pelo usuário
                const produtosVisualizados = produtos.filter(produto => usuarioLogado.produtosVisualizados.includes(produto.id));

                // Exibir os produtos na div "dados"
                produtosVisualizados.forEach(produto => {
                    const produtoElement = document.createElement('div');
                    produtoElement.id = 'card';
                    produtoElement.innerHTML = `<div id="card">
                        <h3>${produto.nome}</h3>
                        <p>${produto.mercado}</p>
                        <h6>${produto.preço}</h6>
                        <img src="${produto.imagem}" alt="${produto.nome}" width="100">
                        <p><a href="#">Detalhes</a><p>
                      </div>`;

                    dadosDiv.appendChild(produtoElement);
                });
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }
});

