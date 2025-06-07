const gallery_list = document.querySelector('#gallery__list')

const gallery = [
    {
        image:'https://cdn.pixabay.com/photo/2025/04/05/11/06/water-drops-9515029_1280.jpg',
        title:'Green',
    },
    {
        image:'https://cdn.pixabay.com/photo/2025/05/31/21/25/insects-9634230_1280.jpg',
        title:'Bug',
    },
    {
        image:'https://cdn.pixabay.com/photo/2025/05/26/14/25/pied-flycatcher-9623545_960_720.jpg',
        title:'Bird',
    }
]

const markUp = gallery_list.map(({image, title}) => `<li class="card gallery__item" style="width: 18rem;">
            <img src= ${image} class="card-img-top" alt=${title}>
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </li>`).join('')

gallery_list.insertAdjacentHTML('beforeend', markUp)
