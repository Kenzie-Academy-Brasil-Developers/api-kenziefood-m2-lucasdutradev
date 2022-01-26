import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {
    static
        async mountCard(products) {
        const card = document.querySelector("div.emptyCart");
        card.innerHTML = "";
        const newCard = new BuildProductLayout(products);
        card.innerHTML = newCard.buildCard();
    }

    static
        async add() {
        let data = await RequestProducts.getProducts()
        let datasOrder = []
        const buttonAdd = document.querySelectorAll(".addCarrinho");
        console.log(buttonAdd)
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                datasOrder.push(Number(button.closest("div.products").id));
                let productsInCard = []
                console.log(data)
                console.log(datasOrder)
                datasOrder.forEach((order) => productsInCard.push(data.find((product) => product.id === order)))
                console.log(productsInCard)
                this.mountCard(productsInCard)

                const buttonRemove = document.querySelectorAll("button.remove--card");
                console.log(buttonRemove)
                buttonRemove.forEach((button) => {
                    button.addEventListener("click", () => {
                        const boxCard = document.querySelector('.emptyCart');
                        const childs = boxCard.childNodes;
                        const divProduct = button.closest("div.products--card");
                        const index = Array.prototype.indexOf.call(childs, divProduct);
                        console.log(index);
                        productsInCard.splice(index, 1);
                        this.mountCard(productsInCard);
                    });
                });
            });
        });
    }

    // static
    //     async remove() {
    //     const buttonRemove = document.querySelectorAll("button.remove--card");
    //     buttonRemove.forEach((button) => {
    //         button.addEventListener("click", async () => {
    //             console.log("chamado");
    //         });
    //     });
    // }
}

setTimeout(() => {
    CreateElementsCards.add()
}, 300)
export { CreateElementsCards }