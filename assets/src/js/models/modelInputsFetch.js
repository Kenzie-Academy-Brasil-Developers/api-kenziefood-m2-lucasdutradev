import { RequestProducts } from "../requestFetch.js"

class captureInputs {

    static
        select() {
        const selector = document.querySelector("select");
        const adicionar = document.querySelector(".addInputs");
        const delet = document.querySelector(".deleteInputs");
        const update = document.querySelector(".updateInputs");
        const buttonAdd = document.querySelector("#sendAdd");
        const buttonDelet = document.querySelector("#sendDelet");
        const buttonUpdate = document.querySelector("#sendUpdate");
        this.captureInputsForm()
        selector.addEventListener("click", () => {
            if (selector.value === "add") {
                adicionar.classList.remove("hidden");
                buttonAdd.classList.remove("hidden");
                buttonDelet.classList.add("hidden");
                buttonUpdate.classList.add("hidden");
                delet.classList.add("hidden");
                update.classList.add("hidden");
            }
            if (selector.value === "delete") {
                delet.classList.remove("hidden")
                buttonAdd.classList.add("hidden");
                buttonDelet.classList.remove("hidden");
                buttonUpdate.classList.add("hidden");
                adicionar.classList.add("hidden")
                update.classList.add("hidden")
            }
            if (selector.value === "path") {
                update.classList.remove("hidden")
                buttonAdd.classList.add("hidden");
                buttonDelet.classList.add("hidden");
                buttonUpdate.classList.remove("hidden");
                delet.classList.add("hidden")
                adicionar.classList.add("hidden")
            }
        });
    }

    static
        captureInputsForm() {
        const buttonAdd = document.querySelector("#sendAdd");
        const buttonDelet = document.querySelector("#sendDelet");
        const buttonUpdate = document.querySelector("#sendUpdate");
        const buttonClose = document.querySelectorAll(".close");
        const modal = document.querySelector(".addi");
        const modalDelet = document.querySelector(".Deletar");
        const modalPatch = document.querySelector(".Atualizar");
        const modalSucess = document.querySelector(".sucess");
        buttonClose.forEach((button) => {
            button.addEventListener("click", () => {
                modal.classList.add("hidden");
                modalDelet.classList.add("hidden");
                modalPatch.classList.add("hidden");
                modalSucess.classList.add("hidden");
            });
        });
        buttonAdd.addEventListener("click", (event) => {
            event.preventDefault()
            const name = document.querySelector("#name").value
            const categoria = document.querySelector("#categoria").value
            const descricao = document.querySelector("#descricao").value
            const preco = document.querySelector("#preco").value
            const image = document.querySelector("#image").value
            if (name === "" || categoria === "" || descricao === "" || preco === "" || image === "") {
                return modal.classList.remove("hidden");
            }
            const data = {
                "nome": name,
                "preco": Number(preco),
                "categoria": categoria,
                "imagem": image,
                "descricao": descricao
            }
            RequestProducts.postMyProducts(data);
            return modalSucess.classList.remove("hidden");
        });
        buttonDelet.addEventListener("click", async (event) => {
            event.preventDefault()
            const id = document.querySelector("#id").value;
            let data = await RequestProducts.getMyProducts();
            let obj = data.find((valor) => valor.id === Number(id))
            if (obj === undefined) {
                return modalDelet.classList.remove("hidden");
            }
            RequestProducts.deletMyProducts(Number(id));
            return modalSucess.classList.remove("hidden");
        });
        buttonUpdate.addEventListener("click", async (event) => {
            event.preventDefault()
            const idPath = document.querySelector("#idPath").value
            const name = document.querySelector("#namePath").value
            const categoria = document.querySelector("#categoriaPath").value
            const descricao = document.querySelector("#descricaoPath").value
            const preco = document.querySelector("#precoPath").value
            const image = document.querySelector("#imagePath").value
            let datas = await RequestProducts.getMyProducts();
            let obj = datas.find((valor) => valor.id === Number(idPath))
            if (name === "" && categoria === "" && descricao === "" && preco === "" && image === "") {
                return modalPatch.classList.remove("hidden");
            }
            if (obj === undefined) {
                return modalPatch.classList.remove("hidden");
            }
            const data = {
                "nome": name,
                "preco": Number(preco),
                "categoria": categoria,
                "imagem": image,
                "descricao": descricao
            }
            if(preco === ""){
                data["preco"] = obj.preco;
            }
            if(categoria === ""){
                data["categoria"] = obj.categoria;
            }
            if(descricao === ""){
                data["descricao"] = obj.descricao;
            }
            if(image === ""){
                data["imagem"] = obj.imagem;
            }
            RequestProducts.patchMyProducts(data, Number(idPath));
            return modalSucess.classList.remove("hidden");
        });
    }
}

export { captureInputs }