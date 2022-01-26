import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {

    static productsInCard = []

    static
        async mountCard(products) {
        const card = document.querySelector("div.emptyCart");
        card.innerHTML = "";
        const newCard = new BuildProductLayout(products);
        card.innerHTML = newCard.buildCard();
        let buttonRemove = document.querySelectorAll("button.remove--card");
        console.log(buttonRemove)
        buttonRemove.forEach((button) => {
            button.addEventListener("click", () => {
                this.remove(button,products)
            });
        });
    }

    static
        async add() {
        let data = await RequestProducts.getProducts()
        let datasOrder
        const buttonAdd = document.querySelectorAll(".addCarrinho");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                datasOrder = Number(button.closest("div.products").id);
                console.log(data)
                console.log(datasOrder)
                this.productsInCard.push(data.find((product) => product.id === datasOrder))
                console.log(this.productsInCard)
                this.mountCard(this.productsInCard)
            });
        });
    }

    static
        remove(button,productsInCard) {
            console.log('hi')
            const boxCard = document.querySelector('.emptyCart');
            const childs = boxCard.childNodes;
            const divProduct = button.closest("div.products--card");
            const index = Array.prototype.indexOf.call(childs, divProduct);
            console.log(index);
            productsInCard.splice(index, 1);
            console.log(this.productsInCard)
            this.mountCard(productsInCard);
        };
}

setTimeout(() => {
    CreateElementsCards.add()
}, 300)
export { CreateElementsCards }