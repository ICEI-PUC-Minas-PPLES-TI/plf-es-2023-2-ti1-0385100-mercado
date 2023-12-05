const dbUrl = "https://jsonserver-tiaw.igorfernandesca.repl.co/mercados";

async function fetchData() {
    try {
        const response = await fetch(dbUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function renderCards() {
    const container = document.getElementById("container");
    const data = await fetchData();

    data.forEach(mercado => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <a href="#" onclick="showPopup(event, '${mercado.nome}', '${mercado.endereco}', '${mercado.cidade}', '${mercado.telefone}', '${mercado.email}', '${mercado.cnpj}')">
            <div class="card-body">
              <h3 class="cardnome">${mercado.nome}</h3>
              <p class="cardcid">${mercado.cidade}</p>
              <p class="cardlocal">${mercado.endereco}</p>   
            </div>
          </a>
        `;

        container.appendChild(card);
    });
}

function showPopup(event, nome, cidade, endereco, telefone, email, cnpj) {
    event.preventDefault();
    document.getElementById("popup-nome").textContent = nome;
    document.getElementById("popup-cidade").textContent = `Cidade: ${cidade}`;
    document.getElementById("popup-endereco").textContent = `Endereço: ${endereco}`;
    document.getElementById("popup-telefone").textContent = `Telefone: ${telefone}`;
    document.getElementById("popup-email").textContent = `Email: ${email}`;
    document.getElementById("popup-cnpj").textContent = `CNPJ: ${cnpj}`;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}

renderCards();

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
