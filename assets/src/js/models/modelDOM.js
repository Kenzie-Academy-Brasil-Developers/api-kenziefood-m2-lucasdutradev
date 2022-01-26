class BuildProductLayout {
    constructor(ProductsArray) {
        this.products = ProductsArray
    }
    buildShowcase() {
        return this.products.map(product => {
            return `<li class="products" id="${product.id}">
                        <img class="imgshowase" src="${product.imagem}" alt="${product.nome}">
                        <span class="spanShowase ${product.categoria}"><img src="assets/images/${product.categoria}.png" alt="icon">${product.categoria}</span>
                        <div class="information">
                            <h2>${product.nome}</h2>
                            <p class="description">${product.descricao}</p>
                            <div id="priceBuy">
                                <p class="price">R$ ${product.preco.toFixed(2)}</p>
                                <button class="imgAddCart"><img src="assets/images/addCarrinho.png" alt="addCarrinho"></button>
                            </div>
                        </div>
                    </li>`}).join('')

    }
    buildCard() {
        return this.products.map(product => {
            return `<li class="products--card">
                        <img class="img--card" src="${product.imagem}" alt="${product.nome}">
                        <div class="info">
                            <h2>${product.nome}</h2>
                            <span>${product.categoria}</span>
                            <p class="price--card">R$ ${product.preco.toFixed(2)}</p>
                        </div>
                        <button class="imgRemoveCart"><img src="./assets/images/excluirCarrinho.png"
                        alt="RemoveCarrinho"></button>
                    </li>`}).join('')

    }

    buildCardEmpity() {
        return `<div class="emptyCart">
                    <img src = "./assets/images/SacolaVazia.png" alt = "SacolaVazia">
                    <h3>Ops!</h3>
                    <p>Por enquanto não temos produtos no carrinho</p>
                </div> `
    }
}

export { BuildProductLayout }