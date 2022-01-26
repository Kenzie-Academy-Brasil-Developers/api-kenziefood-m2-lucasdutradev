import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {

    static productsInCard = []

    static
        async mountCard(products) {
        const card = document.querySelector("#cartList");
        const newCard = new BuildProductLayout(products);
        if (this.productsInCard[0] === undefined) {
            card.innerHTML = newCard.buildCardEmpity()
        } else {
            card.innerHTML = newCard.buildCard();
            let buttonRemove = document.querySelectorAll("button.imgRemoveCart");
            console.log(buttonRemove)
            buttonRemove.forEach((button) => {
                button.addEventListener("click", () => {
                    this.remove(button, products)
                });
            });
        }

    }

    static
        async add() {
        if (localStorage.getItem("productsInCard")) {
            this.productsInCard = JSON.parse(localStorage.getItem("productsInCard"))
            this.mountCard(this.productsInCard)
        }
        let data = await RequestProducts.getProducts()
        let datasOrder
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                datasOrder = Number(button.closest("li.products").id);
                console.log(data)
                console.log(datasOrder)
                this.productsInCard.push(data.find((product) => product.id === datasOrder))
                localStorage.setItem("productsInCard", JSON.stringify(this.productsInCard))
                console.log(this.productsInCard)
                console.log(localStorage.getItem("productsInCard"))
                this.mountCard(this.productsInCard)
            });
        });
    }

    static
        remove(button, productsInCard) {
        console.log('hi')
        const boxCard = document.querySelector('#cartList');
        const childs = boxCard.childNodes;
        const divProduct = button.closest("li.products--card");
        const index = Array.prototype.indexOf.call(childs, divProduct);
        console.log(index);
        productsInCard.splice(index, 1);
        localStorage.setItem("productsInCard", JSON.stringify(this.productsInCard))
        console.log(this.productsInCard)
        this.mountCard(productsInCard);
    };
}

setTimeout(() => {
    CreateElementsCards.add()
}, 300)
export { CreateElementsCards }