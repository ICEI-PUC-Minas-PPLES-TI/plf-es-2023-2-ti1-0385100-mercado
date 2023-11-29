let produtos = [
    {
        "id": 1,
        "nome": "Leite condensado Itambé",
        "categoria": "alimentos",
        "idMercado": 2,
        "preco": 6.70,
        "img": "https://www.itambe.com.br/portal/Images/Produto/itbeleitecondcartsemidesn395gv0308511mkpimg01af01flat_full.png"
    },
    {
        "id": 2,
        "nome": "Macarrão",
        "categoria": "alimentos",
        "idMercado": 1,
        "preco": 2.40,
        "img": "https://hernandes.agilecdn.com.br/1823_1.jpg"
    },
    {
        "id": 3,
        "nome": "Arroz",
        "categoria": "alimentos",
        "idMercado": 2,
        "preco": 18.60,
        "img": "https://supermercadocarioca.com.br/loja/wp-content/uploads/2020/04/ARROZPRATOFINO2KG.png"
    },
    {
        "id": 4,
        "nome": "Vasilha plástica",
        "categoria": "Utensílios de cozinha",
        "idMercado": 4,
        "preco": 9.70,
        "img": "https://images-americanas.b2w.io/produtos/3385892985/imagens/kit-conjunto-4-und-pote-vasilha-plastico-marmita-microondas/3385892985_1_large.jpg"
    },
    {
        "id": 5,
        "nome": "Leite Itambé",
        "categoria": "alimentos",
        "idMercado": 2,
        "preco": 5.50,
        "img": "https://www.itambe.com.br/portal/Images/Produto/itbeleitesuht1limg01integralavisoflat_full.png"
    },
    {
        "id": 6,
        "nome": "Iorgute de morango",
        "categoria": "alimentos",
        "idMercado": 1,
        "preco": 4.75,
        "img": "https://www.itambe.com.br/portal/Images/Produto/3ditambebandejamorango540gpersp_full.png"
    },
    {
        "id": 7,
        "nome": "Iorgute de pêssego",
        "categoria": "alimentos",
        "idMercado": 2,
        "preco": 4.90,
        "img": "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/28432/medium/iogurte-natural-batavo-pedacos-de-pessego-100g_76480.jpg"
    },
    {
        "id": 8,
        "nome": "Óleo de girassol",
        "categoria": "alimentos",
        "idMercado": 3,
        "preco": 9.70,
        "img": "https://giassi.vtexassets.com/arquivos/ids/517610/Oleo-de-Girassol-Tipo-1-Soya-Garrafa-900ml.png?v=637995337259800000"
    },
    {
        "id": 9,
        "nome": "Feijão preto",
        "categoria": "alimentos",
        "idMercado": 4,
        "preco": 6.65,
        "img": "https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/1582828742-mkp-feijao-preto-1kg-3-768x768.png"
    },
    {
        "id": 10,
        "nome": "Travessa de vidro",
        "categoria": "Utensílios de cozinha",
        "idMercado": 2,
        "preco": 6.70,
        "img": "https://images-americanas.b2w.io/produtos/01/00/img/2113369/3/2113369306_1GG.jpg"
    },
    {
        "id": 11,
        "nome": "Açúcar refinado",
        "categoria": "alimentos",
        "idMercado": 3,
        "preco": 10.30,
        "img": "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/2c78f4074abefile.png"
    },
    {
        "id": 12,
        "nome": "Farinha de trigo",
        "categoria": "alimentos",
        "idMercado": 1,
        "preco": 3.20,
        "img": "https://static.paodeacucar.com/img/uploads/1/726/525726.jpg"
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
        "idUsuario": 5,
        "data": "15-09-2023"
    },
    {
        "id": 3,
        "idProduto": 1,
        "idUsuario": 1,
        "data": "01-09-2023"
    },
    {
        "id": 4,
        "idProduto": 12,
        "idUsuario": 2,
        "data": "22-07-2023"
    },
    {
        "id": 5,
        "idProduto": 9,
        "idUsuario": 1,
        "data": "12-10-2023"
    },
    {
        "id": 6,
        "idProduto": 7,
        "idUsuario": 5,
        "data": "09-09-2023"
    },
    {
        "id": 7,
        "idProduto": 8,
        "idUsuario": 1,
        "data": "29-11-2023"
    },
    {
        "id": 8,
        "idProduto": 5,
        "idUsuario": 3,
        "data": "30-11-2023"
    },
    {
        "id": 9,
        "idProduto": 10,
        "idUsuario": 1,
        "data": "08-10-2023"
    },
    {
        "id": 10,
        "idProduto": 12,
        "idUsuario": 5,
        "data": "20-11-2023"
    },
    {
        "id": 11,
        "idProduto": 2,
        "idUsuario": 1,
        "data": "20-11-2023"
    },
    {
        "id": 12,
        "idProduto": 11,
        "idUsuario": 1,
        "data": "20-11-2023"
    },
    {
        "id": 13,
        "idProduto": 8,
        "idUsuario": 1,
        "data": "30-11-2023"
    },
    {
        "id": 14,
        "idProduto": 7,
        "idUsuario": 1,
        "data": "31-11-2023"
    }
]
let usuarios = [
    {
        "id": 1,
        "nome": "Luana Benjamin Jut",
        "email": "luanajutt@gmail.com"
    },
    {
        "id": 2,
        "nome": "Julio Alves",
        "email": "juliokalves45@gmail.com"
    },
    {
        "id": 3,
        "nome": "Tâmara Vinetti",
        "email": "vinettitamara@gmail.com"
    },
    {
        "id": 4,
        "nome": "Karolina Silva",
        "email": "karol907@gmail.com"
    },
    {
        "id": 5,
        "nome": "Jungkook Jeon",
        "email": "goldenmaknae@gmail.com"
    },
    {
        "id": 6,
        "nome": "Bianca Faúla Santos",
        "email": "biancafaula@gmail.com"
    },
    {
        "id": 7,
        "nome": "Lucas Ferreira",
        "email": "lucasfer013@gmail.com"
    },
    {
        "id": 8,
        "nome": "Giovanna do Carmo",
        "email": "giovannapcarmo14@gmail.com"
    }
]
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
    <a href=""><div id="imagem"><img class="imgprod" src="${produto.img}" alt=""></div>
    <h4>${produto.nome}</h4>
    <p>${elemento.data}</p></a>
    <div><button class="btndetalhe">Detalhes...</button></div>
</div>`;
    document.getElementById('dados').appendChild(linha);
});