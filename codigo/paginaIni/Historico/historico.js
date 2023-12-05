let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

let produtos = [
        {
          "nome": "Abacate",
          "tag": "Alimento",
          "mercado": "Supernosso",
          "preço": "1.99",
          "categoria": "Fruta",
          "descriçao": "Abacate é uma fruta muito boa.",
          "imagem": "https://s2-ge.glbimg.com/atIp_axsQ9CQci2-CQ6zGIqLTUU=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/es/ge/f/original/2014/11/20/abacate.jpg",
          "id": 1
        },
        {
          "nome": "Shampoo",
          "tag": "Cosmetico",
          "mercado": "BH",
          "preço": "20",
          "categoria": "Higiene",
          "descriçao": "Shampoo com água e sabão",
          "imagem": "https://drogariasp.vteximg.com.br/arquivos/ids/571385-1000-1000/182729---shampoo-pantene-hidratacao-400ml-1-.jpg?v=637831213674630000",
          "id": 2
        },
        {
          "nome": "Mouse",
          "tag": "Periférico",
          "mercado": "Mercado Dia",
          "preço": "620.00",
          "categoria": "Tecnologia",
          "descriçao": "Mouse muito bom isso ai",
          "imagem": "https://images.kabum.com.br/produtos/fotos/312917/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-lightspeed-25-600-dpi-5-botoes-programaveis-sensor-hero-25k-magenta-910-005955_1662992872_gg.jpg",
          "id": 3
        },
        {
          "nome": "Laranja",
          "tag": "Fruta",
          "mercado": "Supernosso",
          "preço": "2",
          "categoria": "Alimento",
          "imagem": "",
          "id": 4
        },
        {
          "nome": "Arroz",
          "tag": "Cereal",
          "mercado": "BH",
          "preço": "14",
          "categoria": "Alimento",
          "imagem": "https://propao.agilecdn.com.br/2314_1.jpg",
          "id": 5
        }
]

let historicoVisualizacao = [
    {
        "id": 1,
        "idProduto": 3,
        "idUsuario": 1,
        "data": "03-09-2023"
    },
    {
        "id": 2,
        "idProduto": 1,
        "idUsuario": 1,
        "data": "15-09-2023"
    },
    {
        "id": 3,
        "idProduto": 2,
        "idUsuario": 1,
        "data": "01-09-2023"
    },
    {
        "id": 9,
        "idProduto": 5,
        "idUsuario": 1,
        "data": "08-10-2023"
    },
    {
        "id": 10,
        "idProduto": 4,
        "idUsuario": 5,
        "data": "20-11-2023"
    }
]
let usuarios = [
    {
        "id": 1,
        "nome": "Luana Benjamin Jut",
        "email": "luanajutt@gmail.com"
    }]

let usuarioLogado = 1;
let usuario = usuarios.find(function (elemento2) {
    return elemento2.id == usuarioLogado;
});
let historicoFiltrado = historicoVisualizacao.filter(function (elemento) {
    return elemento.idUsuario == usuarioLogado;
});

historicoFiltrado.forEach(function (elemento) {
    let produto = produtos.find(function (elemento2) {
        return elemento2.id == elemento.idProduto;
    });

    let linha = document.createElement('div');

    linha.innerHTML = `<div id="card">
    <a href=""><div id="imagem"><img class="imgprod" src="${produto.imagem}" alt=""></div>
    <h4>${produto.nome}</h4>
    <p>R$${produto.preço}</p>
    <p>${elemento.data}</p></a>
    <div><button class="btndetalhe">Detalhes...</button></div>
</div>`;
    document.getElementById('dados').appendChild(linha);
});