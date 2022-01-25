import { CreateElementsCards } from './criacaoDOMCarrinho.js'

class ControllerCard {
    static
        async removeAndAddProduct() {
        let everyProducts = [1, 2, 3] // recebe o addEventlistener do button e captura o id da vitrine
        let removeClick = 0 // recebe o addEventlistener do button e captura o id do carrinho
        if (removeClick !== 0) {
            let index = everyProducts.indexOf(everyProducts.find((order) => order === removeClick))
            everyProducts.splice(index, 1)
            removeClick = 0
        }
        await CreateElementsCards.createDOM(everyProducts)
    }
}

ControllerCard.removeAndAddProduct()

export { ControllerCard }