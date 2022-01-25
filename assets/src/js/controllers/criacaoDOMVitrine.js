import {RequestProducts} from '../requestFetch.js'
import {BuildProductLayout} from '../models/modelDOM.js'

const vitrine = document.querySelector('#vitrine')

class CreateShowcase{
    static
    async buildShowcase(){
        vitrine.innerHTML = ''
        const allProducts = await RequestProducts.getProducts()
        allProducts.forEach(product=>{
            const builder = new BuildProductLayout(product)
            const model = builder.buildVitrine()
            vitrine.appendChild(model)
        })
    }
    static
    async filterShowcaseSection(section){
        vitrine.innerHTML = ''
        const allProducts = await RequestProducts.getProducts()
        const filteredProducts = allProducts.filter(product=>product.categoria == section)
        filteredProducts.forEach(product=>{
            const builder = new BuildProductLayout(product)
            const model = builder.buildVitrine()
            vitrine.appendChild(model)
        })
    }
    static
    async filterShowcaseSearch(search){
        vitrine.innerHTML = ''
        const allProducts = await RequestProducts.getProducts()
        const filteredProducts = allProducts.filter(product=> product.categoria.toLowerCase().includes(search) || product.nome.toLowerCase().includes(search))
        if(filteredProducts.length>0){
            filteredProducts.forEach(product=>{
                const builder = new BuildProductLayout(product)
                const model = builder.buildVitrine()
                vitrine.appendChild(model)
            })
        }else{
            vitrine.innerText = `Nenhum Produto foi encontrado`
        }
    }
}

CreateShowcase.buildShowcase()
