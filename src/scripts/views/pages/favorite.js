import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItem } from '../templates/template-creator';
import FavoriteRestaurantSearchPresenter from './liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantSearchView from './liked-resto/favorite-resto-search-view';
import FavoriteRestaurantShowPresenter from './liked-resto/favorite-resto-show-presesenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render(){
    return view.getTemplate();
  },

  async afterRender(){
    new FavoriteRestaurantShowPresenter({view, favoriteRestaurant: FavoriteRestaurantIdb});
    new FavoriteRestaurantSearchPresenter({view, favoriteRestaurant: FavoriteRestaurantIdb});
  }
}

// const Favorite = {
//   async render() {
//     return `
//         <div>
//             <center><h1>Favorite List of Restaurant's</h1></center>
//             <br>
//             <div id="restaurant" class="katalog-list"></div>
//         </div>
//     `;
//   },

//   async afterRender() {
//     const resto = await FavoriteRestaurantIdb.getAllRestaurant();
//     const restoContainer = document.querySelector('#restaurant');
//     if (resto.length === 0) {
//       restoContainer.innerHTML += '<h4>Sorry, favorite data is not found</h4>';
//     } else {
//       resto.forEach((data) => {
//         restoContainer.innerHTML += createRestaurantItem(data);
//       });
//     }
//   },
// };

export default Favorite;
