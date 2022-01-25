

class BuildProductLayout{
   constructor(ProductsArray){
    this.products = ProductsArray
   }
    buildVitrine(){
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
}

export{BuildProductLayout}