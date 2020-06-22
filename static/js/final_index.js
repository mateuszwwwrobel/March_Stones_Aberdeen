 
window.onload = () => {
} 

var map;
var markers = [];
var infoWindow;

function initMap() {
    var aberdeen = {
        lat: 57.142728, 
        lng: -2.150560,
    };
map = new google.maps.Map(document.getElementById('map'), {
        center: aberdeen,
        zoom: 13,
        mapTypeId: 'roadmap',
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
}
 
function searchStores(){
    var foundStores = [];
    var zipCode = document.getElementById('stone-number-input').value;
    if(zipCode){
        for(var store of stores){
            var postal = store['id'];
            if(postal == zipCode){
                foundStores.push(store);
            }
        }
    } else {
        foundStores = stores;
    }
    clearLocation();
    displayStores(foundStores);
    showStoresMarkers(foundStores);
    setOnClickListener();
}

function clearLocation(){
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
  }

function setOnClickListener(){
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function(elem, index){
        elem.addEventListener('click', function(){
            google.maps.event.trigger(markers[index], 'click');
        })
    })
}


function displayStores(stores){
    var storesHtml = '';
    for(var [index, store] of stores.entries()){
        var name = store['name'];
        var coordinates_lat = store['coordinates']['latitude'];
        var coordinates_lon = store['coordinates']['longitude'];

        
        storesHtml += `
            <div class="store-container">
                <div class="store-container-background">
                    <div class="store-info-container">
                        <div class="store-address">
                            <span>${name}</span>
                        </div>
                        <div class="store-phone-number">${coordinates_lat}, ${coordinates_lon}</div>
                    </div>
                    <div class="store-number-container">
                        <div class="store-number">
                            ${index}
                        </div>
                    </div>
                </div>
            </div>  
        `
        document.querySelector('.stores-list').innerHTML = storesHtml;
}}


function showStoresMarkers(stores){
    var bounds = new google.maps.LatLngBounds();
    for(var [index, store] of stores.entries()){
        var latlng = new google.maps.LatLng(
            store['coordinates']['latitude'],
            store['coordinates']['longitude']);
        var name = store["name"];
        var marked = store['marked'];
        var access = store["access"];
        var location = store["location"];
        bounds.extend(latlng);
        createMarker(latlng, name, marked, access, location, index);
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, marked, access, location, index){
    var html = `
        <div class="store-info-window">
            <div class="store-info-name">
                ${name}
            </div>
            <div class="store-info-status">
                ${location}
            </div>
            <div class="store-info-address">
                <div class="circle">
                    <i class="fas fa-align-justify"></i>
                </div>
                Marked: ${marked}
            </div>
            <div class="store-info-number">
                <div class="circle">
                    <i class="fas fa-road"></i>
                </div>
                Access: ${access}
            </div>
        </div>
    `;
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      label: index.toString()
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    markers.push(marker);
}
