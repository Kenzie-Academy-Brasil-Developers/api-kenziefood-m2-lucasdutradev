import { captureInputs } from "./models/modelInputsFetch.js"

class RequestProducts {

    static
        async postMyProducts(data) {
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
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json", Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
        });
    }

    static
        async patchMyProducts(data, idPath) {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${idPath}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json", Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
            body: JSON.stringify(data)
        });
        const processedProducts = await response.json();
        return processedProducts
    }

    static
        async getMyProducts() {
        const response = await fetch(`https://kenzie-food-api.herokuapp.com/my/product`, {
            method: 'GET',
            headers: { Authorization: "Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImlhdCI6MTY0MzExODAwMiwiZXhwIjoxNjQzOTgyMDAyLCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.eJRSB14eZyAje7x5c6W7u9UXJdr-_mFCVoGALXzwyJI" },
        });
        const processedProducts = await response.json();
        return processedProducts
    }
}


export { RequestProducts }
