import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailItem } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../components/ReviewList';
import '../components/CategoriesList';
import '../components/MenusList';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="katalog-detail-container"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestaurantDetailItem(resto);

    const categoriesContainer = document.querySelector('#categoriesContainer');
    const categoriesListElement = document.createElement('categories-list');

    categoriesListElement.categories = resto.categories;
    categoriesContainer.appendChild(categoriesListElement);

    const foodsContainer = document.querySelector('#foodContainer');
    const foodsListElement = document.createElement('menus-list');

    foodsListElement.menus = resto.menus.foods;
    foodsContainer.appendChild(foodsListElement);

    const drinkContainer = document.querySelector('#drinkContainer');
    const drinkListElement = document.createElement('menus-list');

    drinkListElement.menus = resto.menus.drinks;
    drinkContainer.appendChild(drinkListElement);

    const reviewContainer = document.querySelector('#reviewContainer');
    const reviewListElement = document.createElement('review-list');

    reviewListElement.reviews = resto.customerReviews;
    reviewContainer.appendChild(reviewListElement);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        categories: resto.categories,
        menus: resto.menus,
        rating: resto.rating,
        customerReviews: resto.customerReviews,
      },
    });
  },
};

export default Detail;
