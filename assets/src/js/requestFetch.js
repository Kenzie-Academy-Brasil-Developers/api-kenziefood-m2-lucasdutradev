import { captureInputs } from "./models/modelInputsFetch.js"

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

    static
        async postMyProducts(data) {
        console.log(data)
        console.log(JSON.stringify({"nome": 'Coca cola', "preco": 12, "categoria": 'bebidas', "imagem": 'https://google.com.br', "descricao": 'bla bla bla'}))
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product`, {
            method: 'POST',
            headers: {"Content-Type": "application/json", Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
            body: JSON.stringify(data)
        });
        const processedProducts = await response.json();
        return processedProducts
    }

    static
        async deletMyProducts(id) {
        console.log(id)
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json", Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
        });
    }

    static
        async getMyProducts() {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product`, {
            method: 'GET',
            headers: { Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
        });
        const processedProducts = await response.json();
        console.log(processedProducts)
        return processedProducts
    }
}


export { RequestProducts }
