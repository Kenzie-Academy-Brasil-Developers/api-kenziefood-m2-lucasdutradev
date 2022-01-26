

class BuildProductLayout{
   constructor(ProductsArray){
    this.products = ProductsArray
   }
    buildShowcase(){
        return this.products.map(product=>{ 
            return `<li class="products" id="${product.id}">
                        <img class="imgshowase" src="${product.imagem}" alt="${product.nome}">
                        <span class="spanShowase"><img src="assets/images/${product.categoria}.png" alt="icon">${product.categoria}</span>
                        <div class="information">
                            <h2>${product.nome}</h2>
                            <p class="description">${product.descricao}</p>
                            <div id="priceBuy">
                                <p class="price">R$ ${product.preco}</p>
                                <button class="imgAddCart"><img src="assets/images/addCarrinho.png" alt="addCarrinho"></button>
                            </div>
                        </div>
                    </li>`}).join('')
       
    }
    buildCard(){
        return this.products.map(product=>{ 
            return `<li class="products--card">
                        <img class="img--card" src="${product.imagem}" alt="${product.nome}">
                        <div class="infos">
                            <h2>${product.nome}</h2>
                            <span>${product.categoria}</span>
                            <p class="price--card">${product.preco}</p>
                        </div>
                        <button class="imgRemoveCart"><img src="./assets/images/excluirCarrinho.png"
                        alt="RemoveCarrinho"></button>
                    </li>`}).join('')
       
    }
}

export{BuildProductLayout}