import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'

// priceTotal.innerText = productsInCard.reduce((acum, value) => acum + value.preco, 0)
// productTotal.innerText = productsInCard.length

class CreateElementsCards {

    static productsInCard = []

    static datasOrder

    static
        async mountCard(products) {
        const card = document.querySelector("#cartList");
        card.innerHTML = "";
        const newCard = new BuildProductLayout(products);
        card.innerHTML = newCard.buildCard();
        let buttonRemove = document.querySelectorAll("button.imgRemoveCart");
        console.log(buttonRemove)
        buttonRemove.forEach((button) => {
            button.addEventListener("click", () => {
                this.remove(button,products)
            });
        });
    }

    static
        async update() {
        if(localStorage.getItem("productsInCard")){
            this.productsInCard = JSON.parse(localStorage.getItem("productsInCard"))
            this.mountCard(this.productsInCard)
        }
    }
    
    static
        async add(){
                let data = await RequestProducts.getProducts()
                console.log(data)
                console.log(this.datasOrder)
                console.log(this.productsInCard)
                this.productsInCard.push(data.find((product) => product.id === this.datasOrder))
                localStorage.setItem("productsInCard",JSON.stringify(this.productsInCard))
                console.log(this.productsInCard)
                console.log(localStorage.getItem("productsInCard"))
                this.mountCard(this.productsInCard)
        }

    static
        remove(button,productsInCard) {
            console.log('hi')
            const boxCard = document.querySelector('#cartList');
            const childs = boxCard.childNodes;
            const divProduct = button.closest("li.products--card");
            const index = Array.prototype.indexOf.call(childs, divProduct);
            console.log(index);
            productsInCard.splice(index, 1);
            localStorage.setItem("productsInCard",JSON.stringify(this.productsInCard))
            console.log(this.productsInCard)
            this.mountCard(productsInCard);
        };
}

setTimeout(() => {
    CreateElementsCards.update()
}, 300)
export { CreateElementsCards }