

class BuildProductLayout{
   constructor(ProductsArray){
    this.products = ProductsArray
   }
    buildShowcase(){
        return this.products.map(product=>{ 
            return `<div class="products" id="${product.id}">
                        <img src="${product.imagem}">
                        <div class="sections">
                            <p>${product.categoria}</p>
                        </div>
                        <h2>${product.nome}</h2>
                        <p class="description">${product.descricao}</p>
                        <div class="bottom">
                            <span>${product.preco}</span>
                            <button class="addCarrinho">buy</button>
                        </div>
                    </div>`}).join('')
       
    }
    buildCard(){
        return this.products.map(product=>{ 
            return `<div class="products--card">
                        <img class="img--card" src="${product.imagem}">
                        <div class="infos">
                            <h3>${product.nome}</h3>
                            <span>${product.categoria}</span>
                            <span class="price--card">${product.preco}</span>
                        </div>
                        <button class="remove--card">trash</button>
                    </div>`}).join('')
       
    }
}

export{BuildProductLayout}