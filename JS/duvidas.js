var acc = document.getElementsByClassName("abaduvida");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var painel = this.nextElementSibling;
    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
    } 
  });
}

let map;
        
async function initMap() {
  // The location of Uluru
  const position = { lat: -25.547661720669165, lng: -54.56004823502812 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();