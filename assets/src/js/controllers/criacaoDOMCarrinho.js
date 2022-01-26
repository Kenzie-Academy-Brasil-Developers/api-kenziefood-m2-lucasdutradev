import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {
    static
        async add() {
        let data = await RequestProducts.getProducts()
        let datasOrder = []
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            return button.addEventListener("click", async () => {
                datasOrder.push(Number(button.closest("li").id));
                let productsInCard = []
                console.log(data)
                console.log(datasOrder)
                datasOrder.forEach((order) => productsInCard.push(data.find((product) => product.id === order)))
                console.log(productsInCard)
                const card = document.querySelector("div.emptyCart");
                card.innerHTML = "";
                const newCard = new BuildProductLayout(productsInCard);
                card.innerHTML = newCard.buildCard();
            });
        });
    }

    static
        async remove() {
        const buttonRemove = document.querySelectorAll("div .price--card");
        console.log(buttonRemove)
        buttonRemove.forEach((button) => {
            button.addEventListener("click", async () => {
            });
        });
    }
}

CreateElementsCards.add()
export { CreateElementsCards }