import { RequestProducts } from '../requestFetch.js'
import { BuildProductLayout } from '../models/modelDOM.js'
import { CreateElementsCards } from './criacaoDOMCarrinho.js'

const vitrine = document.querySelector('#showcaseList')

const input = document.querySelector('#inputSearch')

input.addEventListener('keyup', function (e) {
    CreateShowcase.filterShowcaseSearch(input.value)
})

const all = document.querySelector('#all')
all.addEventListener('click', (e) => {
    CreateShowcase.buildShowcase()
    all.classList.add('activeFilter')
    bakery.classList.remove('activeFilter')
    fruits.classList.remove('activeFilter')
    drinks.classList.remove('activeFilter')
})
const bakery = document.querySelector('#bakery')
bakery.addEventListener('click', (e) => {
    CreateShowcase.filterShowcaseSection('Panificadora')
    bakery.classList.add('activeFilter')
    all.classList.remove('activeFilter')
    fruits.classList.remove('activeFilter')
    drinks.classList.remove('activeFilter')
})
const fruits = document.querySelector('#fruits')
fruits.addEventListener('click', (e) => {
    CreateShowcase.filterShowcaseSection('Frutas')
    fruits.classList.add('activeFilter')
    bakery.classList.remove('activeFilter')
    all.classList.remove('activeFilter')
    drinks.classList.remove('activeFilter')
})
const drinks = document.querySelector('#drinks')
drinks.addEventListener('click', (e) => {
    CreateShowcase.filterShowcaseSection('Bebidas')
    drinks.classList.add('activeFilter')
    bakery.classList.remove('activeFilter')
    fruits.classList.remove('activeFilter')
    all.classList.remove('activeFilter')
})

class CreateShowcase {
    static
        async buildShowcase() {
        const allProducts = await RequestProducts.getMyProducts()
        const builder = new BuildProductLayout(allProducts)
        vitrine.innerHTML = builder.buildShowcase()
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                CreateElementsCards.datasOrder = Number(button.closest("li.products").id);
                CreateElementsCards.add()
            });
        });
    }
    static
        async filterShowcaseSection(section) {
        const allProducts = await RequestProducts.getMyProducts()
        const filteredProducts = allProducts.filter(product => product.categoria == section)
        const builder = new BuildProductLayout(filteredProducts)
        vitrine.innerHTML = builder.buildShowcase()
        const buttonAdd = document.querySelectorAll(".imgAddCart");
        buttonAdd.forEach((button) => {
            button.addEventListener("click", () => {
                CreateElementsCards.datasOrder = Number(button.closest("li.products").id);
                CreateElementsCards.add()
            });
        });
    }
    static
        async filterShowcaseSearch(search) {
        if (search != '') {
            const allProducts = await RequestProducts.getMyProducts()
            const filteredProducts = allProducts.filter(product => { return product.categoria.toLowerCase().includes(search) || product.nome.toLowerCase().includes(search) })
            if (filteredProducts.length > 0) {
                const builder = new BuildProductLayout(filteredProducts)
                vitrine.innerHTML = builder.buildShowcase()
                const buttonAdd = document.querySelectorAll(".imgAddCart");
                buttonAdd.forEach((button) => {
                    button.addEventListener("click", () => {
                        CreateElementsCards.datasOrder = Number(button.closest("li.products").id);
                        CreateElementsCards.add()
                    });
                });
            } else {
                vitrine.innerText = `Nenhum Produto foi encontrado`
            }
        } else {
            this.buildShowcase()
        }
    }
}

CreateShowcase.buildShowcase()
