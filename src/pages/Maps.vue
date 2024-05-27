<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
    <card type="plain" title="Google Maps">
      <div id="map" class="map-container"></div>
      <input id="pac-input" class="controls" type="text" placeholder="Search Box" />
      <div class="switch__container">
        <input id="switch-shadow" class="switch switch--shadow" type="checkbox" v-model="addPersonalMarkers">
        <label for="switch-shadow"></label>
        <span>Ativar Marcadores Pessoais</span>
      </div>
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
      selectedMarkers: [],
      polyline: null,
      userMarkers: [],
      addPersonalMarkers: false,
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
        //use google's method to set the marker
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
          if (!infoWindow.getMap()) {
            infoWindow.open(this.map, marker);
          }
        });

        //listen when a infowindow is closed so we dont trace a rout to it
        infoWindow.addListener('closeclick', () => {
          const index = this.selectedMarkers.indexOf(marker.getPosition());
          if (index > -1) {
            this.selectedMarkers.splice(index, 1);
            //draw the line
            this.updatePolyline();
          }
        });


        infoWindow.addListener('domready', () => {
          if (!this.selectedMarkers.includes(marker.getPosition())) {
            this.selectedMarkers.push(marker.getPosition());
            this.updatePolyline();
          }
        });

        bounds.extend(marker.getPosition());
      });
      this.map.fitBounds(bounds);
    },
    //maps api configuration
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
      // add new markers to whenever the user clicks on the map
      this.map.addListener('click', (event) => {
        if (this.addPersonalMarkers) {
          this.addUserMarker(event.latLng);
        }
      });

      // load the local storage markers
      this.loadUserMarkers();

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
    //trace the route between the markers on the map
    updatePolyline() {
      if (this.polyline) {
        //check if there is already a polyline
        this.polyline.setMap(null);
      }
      //create a new polyline based on the markers selected with infowindow
      this.polyline = new google.maps.Polyline({
        path: this.selectedMarkers,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      //add the polyline to the map
      this.polyline.setMap(this.map);
    },
    // add new markers to the map
    addUserMarker(location) {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });

      // save the marker on local storage
      this.userMarkers.push(location);
      localStorage.setItem('userMarkers', JSON.stringify(this.userMarkers));
    },
    // load the markers from local storage
    loadUserMarkers() {
      const savedMarkers = JSON.parse(localStorage.getItem('userMarkers'));
      if (savedMarkers) {
        this.userMarkers = savedMarkers;
        this.userMarkers.forEach(location => {
          new google.maps.Marker({
            position: location,
            map: this.map,
          });
        });
      }
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

<style scoped lang="scss">
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
}

#pac-input {
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-top: 9px;
}

.switch__container {
  position: absolute;
  bottom: -40px; /* position */
  left: 10px; /* position */
  display: flex;
  align-items: center;
  color: #FFF;
}
.switch {
  visibility: hidden;
  position: absolute;
  margin-left: -9999px;
}

.switch + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  width: 60px;
  height: 34px;
  background-color: #dddddd;
  border-radius: 34px;
  transition: background 0.4s;
  margin-right: 10px; /* space between button and text */
}

.switch + label:before{
  right: 1px;
  background-color: #f1f1f1;
  border-radius: 60px;
  transition: background 0.4s;
}
.switch + label:after {
  display: block;
  position: absolute;
  content: "";
}

.switch + label:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
  background-color: #fff;
  border-radius: 34px;
  transition: background 0.4s;
}

.switch + label:after {
  top: 4px;
  left: 4px;
  bottom: 4px;
  width: 26px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}

.switch:checked + label {
  background-color: #8ce196;
}

.switch:checked + label:after {
  transform: translateX(26px);
}

.switch__container span {
  font-size: 16px;
  color: #FFF;
  white-space: nowrap;
}

</style>
