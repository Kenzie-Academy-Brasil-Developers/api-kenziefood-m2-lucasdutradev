import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {

    static productsInCard = []

    static
        async mountCard(products) {
        const card = document.querySelector("#cartList");
        card.innerHTML = "";
        const newCard = new BuildProductLayout(products);
        card.innerHTML = newCard.buildCard();
        let buttonRemove = document.querySelectorAll("button.remove--card");
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
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                datasOrder = Number(button.closest("div.products").id);
                this.productsInCard.push(data.find((product) => product.id === datasOrder))
                console.log(this.productsInCard)
                this.mountCard(this.productsInCard)
            });
        });
    }

    static
        remove(button,productsInCard) {
            console.log('hi')
            const boxCard = document.querySelector('#cartList');
            const childs = boxCard.childNodes;
            const divProduct = button.closest("div.products--card");
            const index = Array.prototype.indexOf.call(childs, divProduct);
            productsInCard.splice(index, 1);
            console.log(this.productsInCard)
            this.mountCard(productsInCard);
        };
}

setTimeout(() => {
    CreateElementsCards.add()
}, 300)

export { CreateElementsCards }