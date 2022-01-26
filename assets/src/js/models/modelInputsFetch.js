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
        selector.addEventListener("click", () => {
            if (selector.value === "add") {
                adicionar.classList.remove("hidden");
                buttonAdd.classList.remove("hidden");
                buttonDelet.classList.add("hidden");
                buttonUpdate.classList.add("hidden");
                delet.classList.add("hidden");
                update.classList.add("hidden");
                this.captureInputsForm()
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
        buttonAdd.addEventListener("click", (event) => {
            event.preventDefault()
            const name = document.querySelector("#name").value
            const categoria = document.querySelector("#categoria").value
            const descricao = document.querySelector("#descricao").value
            const preco = document.querySelector("#preco").value
            const image = document.querySelector("#image").value
            const data = {
                "nome": name,
                "preco": Number(preco),
                "categoria": categoria,
                "imagem": image,
                "descricao": descricao
            }
            RequestProducts.postMyProducts(data);
        });
        buttonDelet.addEventListener("click", (event) => {
            event.preventDefault()
            const id = document.querySelector("#id").value;
            RequestProducts.deletMyProducts(Number(id));
        });
        buttonUpdate.addEventListener("click", (event) => {
            event.preventDefault()
            const idPath = document.querySelector("#idPath").value
            const name = document.querySelector("#namePath").value
            const categoria = document.querySelector("#categoriaPath").value
            const descricao = document.querySelector("#descricaoPath").value
            const preco = document.querySelector("#precoPath").value
            const image = document.querySelector("#imagePath").value
            const data = {
                "nome": name,
                "preco": Number(preco),
                "categoria": categoria,
                "imagem": image,
                "descricao": descricao
            }
        });
    }
}

export { captureInputs }