
class RequestProducts {
    static
        async getProducts() {
            const response = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
            const processedProducts = await response.json();
            return processedProducts
    }
    static
        async getProduct(id) {
            const response = await fetch(`https://kenzie-food-api.herokuapp.com/product/${id}`)
            const processedProduct = await response.json();
            return processedProduct
    }
}

export{RequestProducts}
