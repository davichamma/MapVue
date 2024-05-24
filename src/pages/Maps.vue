<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
    <card type="plain" title="Google Maps">
      <div id="map" class="map-container"></div>
      <input id="pac-input" class="controls" type="text" placeholder="Search Box" />
    </card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      map: null,
      countryData: null,
    };
  },
  methods: {
    // get country data from restcountries using the translation endpoint since we search mostrly in english
    async fetchCountryData(countryName) {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/translation/${countryName}`);
        this.countryData = response.data;
        this.addMarkers(this.countryData, countryName);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    },
    addMarkers(countries, countryName) {
      //use google's latlng method to get the info for placing the marker
      const bounds = new google.maps.LatLngBounds();
      countries.forEach(country => {
        const { latlng, capitalInfo, flags, name, capital, currencies, languages, continents } = country;
        //handle missing information with an exit
        if (!capitalInfo || !capitalInfo.latlng) return;
        //use google1s method to set the marker
        const marker = new google.maps.Marker({
          //set the marker on the capital latlng
          position: { lat: capitalInfo.latlng[0], lng: capitalInfo.latlng[1] },
          map: this.map,
          title: name.common,
        });
        //add a window to display the info about the searched country
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="color: black; padding: 10px; border-radius: 10px;">
              <h2 style="color: black;">
                ${countryName} <img src="${flags.png}" alt="Flag of ${name.common}" style="width: 30px; height: auto; margin-left: 10px;">
              </h2>
              <p style="color: black;><strong style="color: black;">Capital:</strong> ${capital ? capital[0] : 'N/A'}</p>
              <p style="color: black;><strong style="color: black;">Currency:</strong> ${currencies ? Object.values(currencies)[0].name : 'N/A'}</p>
              <p style="color: black;><strong style="color: black;">Language:</strong> ${languages ? Object.values(languages).join(', ') : 'N/A'}</p>
              <p style="color: black;><strong style="color: black;">Continent:</strong> ${continents ? continents[0] : 'N/A'}</p>
            </div>
          `
        });
        //open infoWindow whenever maker is clicked
        marker.addListener('click', () => {
          infoWindow.open(this.map, marker);
        });

        bounds.extend(marker.getPosition());
      });
      this.map.fitBounds(bounds);
    },
    //maps pai configuration
    initAutocomplete() {
      const myLatlng = new google.maps.LatLng(40.748817, -73.985428);
      const mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false,
        //pass mapID so we can use cloud style and get rid of annoying warnings
        mapId: '3b19c2a44e280068'
      };
      //declare map
      this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //set searchbox
      const input = document.getElementById("pac-input");
      const searchBox = new google.maps.places.SearchBox(input);

      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
      // Adjust the search box bounds to map bounds
      this.map.addListener("bounds_changed", () => {
        searchBox.setBounds(this.map.getBounds());
      });

      let markers = [];

      searchBox.addListener("places_changed", async () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }
        // Clear out the old markers
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        const bounds = new google.maps.LatLngBounds();
        // For each place, get the icon, name, and location
        for (const place of places) {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
          };

          await this.fetchCountryData(place.name); 
          // Adjust the map's viewport to fit the new place
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        }
        this.map.fitBounds(bounds);
      });
    },
    disableRTL() {
      if (!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    },
    toggleNavOpen() {
      let root = document.getElementsByTagName("html")[0];
      root.classList.toggle("nav-open");
    },
  },
  mounted() {
    this.$watch("$route", this.disableRTL, { immediate: true });
    this.$watch("$sidebar.showSidebar", this.toggleNavOpen);
    // Initialize the autocomplete functionality when the component is mounted
    this.initAutocomplete(); 
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  
}

#pac-input {
  border-radius: 10px;
  /* Bordas arredondadas */
  padding: 10px;
  /* Espaçamento interno */
  font-size: 16px;
  /* Tamanho da fonte */
  width: 300px;
  /* Largura */
  margin-top: 9px;
}

/* Estilos para a lista de sugestões */
.pac-container {
  background-color: #000F20 !important;
  /* Cor de fundo */
  color: #0EC9AC !important;
  /* Cor das letras */
  border-radius: 10px !important;
  /* Bordas arredondadas */
  border: 2px solid #663399 !important;
  /* Cor da borda */
  z-index: 1051 !important;
  /* Certifique-se de que a lista de sugestões esteja acima de outros elementos */
}

/* Estilos para os itens da lista de sugestões */
.pac-item {
  background-color: #000F20 !important;
  /* Cor de fundo */
  color: #0EC9AC !important;
  /* Cor das letras */
}

.pac-item:hover {
  background-color: #663399 !important;
  /* Cor de fundo ao passar o mouse */
}

.pac-item-query {
  color: #0EC9AC !important;
  /* Cor das letras */
}

.gm-style-iw-d {
  overflow: auto !important;
  max-height: 314px;
}
</style>
