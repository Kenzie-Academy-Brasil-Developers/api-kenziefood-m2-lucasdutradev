function filtroCategoria(event) {
    const filterSelect = event.target    
    filterSelect.style = 'border: solid 1px black';
}


all.addEventListener('click', filtroCategoria)
bakery.addEventListener('click', filtroCategoria)
fruits.addEventListener('click', filtroCategoria)
drinks.addEventListener('click', filtroCategoria)
