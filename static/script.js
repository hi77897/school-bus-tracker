// 模拟路线：起点 → TAR UMT
const route = [
    { lat: 3.2155, lng: 101.7282 },  // AEON Big 附近（PV18）
    { lat: 3.2168, lng: 101.7305 },
    { lat: 3.2192, lng: 101.7328 },
    { lat: 3.2215, lng: 101.7352 },  // TAR UMT 校门
];

let map, marker, index = 0;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: route[0],
    });

    marker = new google.maps.Marker({
        position: route[0],
        map,
        icon: "https://maps.google.com/mapfiles/ms/icons/bus.png",
        title: "Simulated Bus",
    });

    moveMarker();
}

function moveMarker() {
    setInterval(() => {
        index = (index + 1) % route.length;
        marker.setPosition(route[index]);
        map.panTo(route[index]);
    }, 3000); // 每 3 秒移动一次（模拟）
}

window.initMap = initMap;
