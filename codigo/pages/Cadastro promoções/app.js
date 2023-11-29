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
const apiUrl = 'https://jsonserver.tuliohenrique3.repl.co/promocoes'; 

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readPromocao(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler promoções via API JSONServer:', error);
            displayMessage("Erro ao ler promoções");
        });
}

function createPromocao(promocao, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(promocao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Promoção inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir promocao via API JSONServer:', error);
            displayMessage("Erro ao inserir promocao");
        });
}

function updatePromocao(id, promocao, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(promocao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Promoção alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar promocao via API JSONServer:', error);
            displayMessage("Erro ao atualizar promocao");
        });
}

function deletePromocao(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Promoção removido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover promocao via API JSONServer:', error);
            displayMessage("Erro ao remover promocao");
        });
}
