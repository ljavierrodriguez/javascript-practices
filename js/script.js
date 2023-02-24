const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal-content .close');

// galeria de imagenes a cargar
const items = [
    "https://picsum.photos/id/1/200/200",
    "https://picsum.photos/id/2/200/200",
    "https://picsum.photos/id/3/200/200",
    "https://picsum.photos/id/4/200/200",
    "https://picsum.photos/id/5/200/200",
    "https://picsum.photos/id/6/200/200",
    "https://picsum.photos/id/7/200/200",
    "https://picsum.photos/id/8/200/200",
    "https://picsum.photos/id/9/200/200",
    "https://picsum.photos/id/10/200/200",
    "https://picsum.photos/id/11/200/200",
    "https://picsum.photos/id/12/200/200",
    "https://picsum.photos/id/13/200/200",
    "https://picsum.photos/id/14/200/200",
    "https://picsum.photos/id/15/200/200",
]

// evento que permite cerrar el modal al hacer click en la (X)
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
})

// evento que se activa al momento de haber sido cargada la pagina completamente
window.onload = function(){  
    
    // funcion que muestra el modal al hacer click sobre la imagen
    function loadModal(e){
        let imgModal = modal.querySelector('.modal-content img');
        const { src } = e.target;
        imgModal.src = src;
        modal.style.display = 'block';
    }


    // function que crea y carga las imagenes en el html dinamicamente
    function loadItems(arr = []){
        
        for(let image of arr){
            //console.log(image);

            let item = document.createElement('div');
            let img = document.createElement('img');

            item.classList.add('gallery-item');
            item.addEventListener('click', loadModal);

            img.src=image;

            item.appendChild(img)

            gallery.appendChild(item);

        }
    }

    loadItems(items);
}

// evento que se ejecuta cuando se hace click en la ventana o navegador
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}
