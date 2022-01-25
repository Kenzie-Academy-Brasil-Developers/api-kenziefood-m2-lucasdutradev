import {RequestProducts} from '../requestFetch.js'
import {BuildProductLayout} from '../models/modelDOM.js'

const vitrine = document.querySelector('#vitrine')

class CreateShowcase{
    static
    async buildShowcase(){
        const allProducts = await RequestProducts.getProducts()
        allProducts.forEach(product=>{
            const builder = new BuildProductLayout(product)
            const model = builder.buildVitrine()
            vitrine.appendChild(model)
        })
    }
    static
    async filterShowcaseSection(section){
        const allProducts = await RequestProducts.getProducts()
        const filteredProducts = allProducts.filter(product=>product.categoria == section)
        filteredProducts.forEach(product=>{
            const builder = new BuildProductLayout(product)
            const model = builder.buildVitrine()
            vitrine.appendChild(model)
        })
    }
}


CreateShowcase.buildShowcase()
