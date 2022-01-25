import { RequestProducts } from '../requestFetch.js'

class CreateElementsCards {

    static
        async createDOM(clickId) {
        let data = await RequestProducts.getProducts() // aqui capturamos a data que vem do fetch
        let datasOrder = await clickId
        let productsInCard = [] // aqui sera armazenado os itens que existem dentro do carrinho
        datasOrder.forEach((order) => productsInCard.push(data.find((product) => product.id === order)))

        const cart = document.querySelector("div.emptyCart"); // box de captura
        cart.innerHTML = ""

        const priceTotal = document.createElement("p");
        const productTotal = document.createElement("p");

        productsInCard.forEach((valor) => {
            const img = document.createElement("img");
            const categoria = document.createElement("span")
            const h2 = document.createElement("h2");
            const preco = document.createElement("p");

            img.src = valor.imagem;

            categoria.innerText = valor.categoria;
            h2.innerText = valor.nome;
            preco.innerText = valor.preco;

            cart.appendChild(img)
            cart.appendChild(categoria)
            cart.appendChild(h2)
            cart.appendChild(preco)
        });
        priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
        productTotal.innerText = productsInCard.length
        console.log(productsInCard)
        console.log(priceTotal)
        console.log(productTotal)
    }
}

export { CreateElementsCards }