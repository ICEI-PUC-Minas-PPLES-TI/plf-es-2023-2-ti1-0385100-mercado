let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

let card = document.querySelector('.painel-card');

fetch('https://jsonserver-tiaw.igorfernandesca.repl.co/produtos')
.then(response => response.json())
.then(data => {
    data.forEach(produto => {
        card.innerHTML += `
        <div class="card">
            <img src="${produto.imagem}" alt="Imagem do produto">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preço}</p>
        </div>
        `
    })
})


let mercados = document.querySelector('.painel-mercado');

fetch('https://jsonserver-tiaw.igorfernandesca.repl.co/mercados')
.then(response => response.json())
.then(data => {
    data.forEach(mercado => {
        mercados.innerHTML += `
        <div class="card-mercados">
            <h3> ${mercado.nome} </h3>
            <p>Endereço: ${mercado.endereco}</p>
            <p>Telefone: ${mercado.telefone}</p>
        </div>
        `
    })
})
