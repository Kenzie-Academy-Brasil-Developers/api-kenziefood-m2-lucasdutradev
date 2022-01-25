import { RequestProducts } from '../requestFetch.js'

class ControllerCard {

    static
        async createDOM() {
        let click = [1, 2, 5] // aqui vem a captura do id do botao document.query...
        let productsInCard = [] // aqui sera armazenado os itens que existem dentro do carrinho
        let data = await RequestProducts.getProducts() // aqui capturamos a data que vem do fetch
        click.forEach((order) => productsInCard.push(data.find((product) => product.id === order)))

        const card = document.querySelector(".card"); // box de captura

        productsInCard.forEach((valor) => {
            const img = document.createElement("img");
            const categoria = document.createElement("span")
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const preco = document.createElement("p");

            img.src = valor.imagem;
            
            categoria.innerText = valor.categoria;
            h2.innerText = valor.nome;
            p.innerText = valor.descricao;
            preco.innerText = valor.preco;

            // dar apend no box que capturar

            card.appendChild(img)
            card.appendChild(categoria)
            card.appendChild(h2)
            card.appendChild(p)
            card.appendChild(preco)
        });

    }
}

ControllerCard.createDOM()

export { ControllerCard }