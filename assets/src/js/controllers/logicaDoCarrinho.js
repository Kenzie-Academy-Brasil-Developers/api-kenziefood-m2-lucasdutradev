import { CreateElementsCards } from './criacaoDOMCarrinho.js'

class ControllerCard {
    static
        async removeAndAddProduct(everyProducts = []) { // recebe o addEventlistener do button e captura o id da vitrine
        let removeClick = 0 // recebe o addEventlistener do button e captura o id do carrinho
        if (removeClick !== 0) {
            let index = everyProducts.indexOf(everyProducts.find((order) => order === removeClick))
            everyProducts.splice(index, 1)
            removeClick = 0
        }
        await CreateElementsCards.createDOM(everyProducts)
    }

    static
        async execute() {
        let everyProducts = []
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", async () => {
                everyProducts.push(Number(button.closest("li").id));
                await this.removeAndAddProduct(everyProducts);
            });
        });
    }
}

ControllerCard.execute()

export { ControllerCard }