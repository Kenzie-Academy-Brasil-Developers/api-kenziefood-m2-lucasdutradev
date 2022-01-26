import {RequestProducts} from '../requestFetch.js'
import {BuildProductLayout} from '../models/modelDOM.js'

const vitrine = document.querySelector('#showcaseList')

const input = document.querySelector('#inputSearch')

input.addEventListener('keypress',function(e){
    CreateShowcase.filterShowcaseSearch(input.value)
})

class CreateShowcase{
    static
    async buildShowcase(){
        const allProducts = await RequestProducts.getProducts()
        const builder = new BuildProductLayout(allProducts)
        vitrine.innerHTML = builder.buildShowcase()
    }
    static
    async filterShowcaseSection(section){
        const allProducts = await RequestProducts.getProducts()
        const filteredProducts = allProducts.filter(product=>product.categoria == section)
        const builder = new BuildProductLayout(filteredProducts)
        vitrine.innerHTML = builder.buildShowcase()
    }
    static
    async filterShowcaseSearch(search){
        const allProducts = await RequestProducts.getProducts()
        const filteredProducts = allProducts.filter(product=> { return product.categoria.toLowerCase().includes(search) || product.nome.toLowerCase().includes(search)})
        if(filteredProducts.length>0){
            const builder = new BuildProductLayout(filteredProducts)
            vitrine.innerHTML = builder.buildShowcase()      
        }else{
            vitrine.innerText = `Nenhum Produto foi encontrado`
        }
    }
}

// CreateShowcase.buildShowcase()
