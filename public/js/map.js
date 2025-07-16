const map = new maplibregl.Map({
  container: 'map',
  style: `https://api.maptiler.com/maps/topo-v2/style.json?key=${window.mapKey}`,
  center: listing.geometry.coordinates,
  zoom: 9,
});

console.log(listing.geometry.coordinates);
console.log("Type:", typeof listing.geometry.coordinates);

// Create popup
const popup = new maplibregl.Popup({ offset: 25 }) // offset is optional
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`); // dynamically passed

// Create marker with popup
const marker = new maplibregl.Marker({ color: "blue" }) // Optional color
  .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
  .setPopup(popup) // ✅ attach popup
  .addTo(map);
