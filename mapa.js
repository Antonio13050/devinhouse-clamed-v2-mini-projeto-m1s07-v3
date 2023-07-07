let latitude = 0;
let longitude = 0;

async function pegarLocalizacao() {
    if (window.navigator && window.navigator.geolocation) {
        let localizacao = window.navigator.geolocation;
        localizacao.getCurrentPosition(sucesso, falha);
    } else {
        console.log("Não suportado ou não autorizado pelo usuario");
    }
    function sucesso(posicao) {
        latitude = posicao.coords.latitude;
        longitude = posicao.coords.longitude;

        var map = L.map("map").setView(
            [posicao.coords.latitude, posicao.coords.longitude],
            13
        );

        console.log(latitude, longitude);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup("<h3>Localização</h3>")
            .openPopup();
    }
    function falha(error) {
        console.log(error);
    }
}
pegarLocalizacao();
