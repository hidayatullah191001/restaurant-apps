import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div>
            <center><h1>Favorite List of Restaurant's</h1></center>
            <br>
            <div id="restaurant" class="katalog-list"></div>
        </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurant();
    const restoContainer = document.querySelector('#restaurant');
    if (resto.length === 0) {
      restoContainer.innerHTML += '<h4>Sorry, favorite data is not found</h4>';
    } else {
      resto.forEach((data) => {
        restoContainer.innerHTML += createRestaurantItem(data);
      });
    }
  },
};

export default Favorite;
