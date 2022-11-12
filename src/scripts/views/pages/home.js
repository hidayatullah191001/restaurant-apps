import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItem } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
 
const START = 5;
const NUMBER_OF_IMAGES = 100;

const Home = {
  async render() {
    return `
        <div>
            <center><h1>List of Restaurant's</h1></center>
            <br>
            <div id="restaurant" class="katalog-list"></div>
        </div>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.listRestaurant();
    const restoContainer = document.querySelector('#restaurant');
    resto.forEach((data) => {
      restoContainer.innerHTML += createRestaurantItem(data);
      console.log(data.restaurant);
    });
  },
};

export default Home;
