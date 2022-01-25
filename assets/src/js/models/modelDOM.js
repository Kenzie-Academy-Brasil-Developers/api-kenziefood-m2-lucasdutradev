

class BuildProductLayout{
    constructor({id,nome,preco,categoria,descricao,imagem,}){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.descricao = descricao;
        this.imagem = imagem;
        this.preco = preco;
    }
    buildVitrine(){
        const divProduct = document.createElement("div");
        divProduct.classList.add('products')
        const img = document.createElement("img");
        img.src = this.imagem
        const divSection = document.createElement("div");
        divSection.classList.add('sections')
        divSection.innerText = this.categoria
        const title = document.createElement("h2")
        title.innerText = this.nome
        const description = document.createElement("p")
        description.innerText = this.descricao
        const bottom = document.createElement("div")
        const price = document.createElement("span")
        price.innerText = `R$ ${this.preco}`
        const addCarrinho = document.createElement("button")
        addCarrinho.classList.add('addCarrinho')
        bottom.appendChild(price)
        bottom.appendChild(addCarrinho)
        divProduct.appendChild(img)
        divProduct.appendChild(divSection)
        divProduct.appendChild(title)
        divProduct.appendChild(description)
        divProduct.appendChild(bottom)
        return divProduct
    }
}

export{BuildProductLayout}