import {RequestProducts} from '../requestFetch.js'

class CreateShowcase{
    static
    buildShowcase(){
        const allProducts = RequestProducts.getProducts()
        console.log(allProducts)
    }
}