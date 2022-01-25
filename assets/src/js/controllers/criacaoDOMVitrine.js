import {RequestProducts} from '../requestFetch.js'
import {BuildProductLayout} from '../models/modelDOM.js'

const vitrine = document.querySelector('#vitrine')

class CreateShowcase{
    static
    async buildShowcase(){
        const allProducts = await RequestProducts.getProducts()
        allProducts.forEach(product=>{
            const builder = new BuildProductLayout(product)
            const model = builder.build()
            vitrine.appendChild(model)
        })
    }
}

CreateShowcase.buildShowcase()
