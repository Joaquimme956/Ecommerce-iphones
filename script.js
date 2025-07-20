const produtos = [
    { nome: "iPhone X", preco: 180000, imagem: "iphone-x.jpg" },
    { nome: "iPhone SE", preco: 130000, imagem: "iphone-se.jpg" },
    { nome: "iPhone 12", preco: 250000, imagem: "iphone-12.jpg" }
];

const carrinho = [];
const container = document.getElementById("produtos");
const ulCarrinho = document.getElementById("itens-carrinho");
const totalSpan = document.getElementById("total");

produtos.forEach((produto, i) => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}"/>
        <h3>${produto.nome}</h3>
        <p>${produto.preco} Kz</p>
        <button onclick="addCarrinho(${i})">Adicionar</button>
    `;
    container.appendChild(div);
});

function addCarrinho(i) {
    carrinho.push(produtos[i]);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    ulCarrinho.innerHTML = "";
    let total = 0;
    carrinho.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nome} - ${p.preco} Kz`;
        ulCarrinho.appendChild(li);
        total += p.preco;
    });
    totalSpan.textContent = total;
}

function finalizarCompra() {
    document.getElementById("checkout").style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
}

function enviarPedido(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("telefone").value;
    alert("Pedido confirmado! Entraremos em contato, " + nome + ".");
}