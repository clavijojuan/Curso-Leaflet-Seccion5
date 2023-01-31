// referencias 
const sidebar = document.querySelector('#sidebar');
const mensaje = document.querySelector('#mensaje');

// mapa
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// funciones
const definirMensaje = ([lat, lng]) => {
    mensaje.classList.remove('hidden');
    mensaje.innerText = `Las coordenadas son las siguientes:
        Latitud: ${lat}
        Longitud: ${lng}
    `;
}


const volar = (latlng) => {
    const zoom = map.getZoom();
    map.flyTo(latlng, zoom );
}

const limpiarItems = () => {
    const listadoLi = document.querySelectorAll('li');
    listadoLi.forEach( li => {
        li.classList.remove('active');
    })
}

const crearItems = () => {

    const ul = document.createElement('ul');
    ul.classList.add('list-group');
    sidebar.prepend(ul);

    lugares.forEach( lugar => {
        const li = document.createElement('li');
        li.innerText = lugar.nombre;
        li.classList.add('list-group-item');
        ul.append(li);

        li.addEventListener('click', () => {
            limpiarItems();
            li.classList.add('active');
            volar(lugar.coordenadas);
            definirMensaje(lugar.coordenadas)
        })
    })

}

crearItems();