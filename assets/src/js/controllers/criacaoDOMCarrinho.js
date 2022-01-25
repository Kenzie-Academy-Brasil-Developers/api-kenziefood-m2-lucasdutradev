class ControllerCard {

    static // metodo sera removido depois
        async captureAPI() {
        const response = await fetch("https://kenzie-food-api.herokuapp.com/product");
        const data = await response.json()
        return data
    }

    static
        async createDOM() {
        let click = 1 // aqui vem a captura do id do botao document.query...
        let productsInCard = [] // aqui sera armazenado os itens que existem dentro do carrinho
        let data = await this.captureAPI() // aqui capturamos a data que vem do fetch
        productsInCard.push(data.find((product) => product.id = click)) // aqui encontramos o produto que tem o mesmo id que o botao clicado
        const card = document.querySelector(".card");
        card
    }
}

export { ControllerCard }