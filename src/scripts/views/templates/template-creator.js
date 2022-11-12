import CONFIG from '../../globals/config';
const createRestaurantItem = (restaurant) => `
    <div class="card katalog-item" tabindex="0">
        <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <p class="katalog-rating"><b>${restaurant.rating}</b></p>
        <div aria-label="Resto ${restaurant.name}" class="container">
          <center>
            <h3><a href="/#/detail/${restaurant.id}">Restaurant ${restaurant.name}</a></h3>
            <h5>City : ${restaurant.city}</h5><br/>
          </center>
        </div>
    </div>
`;

function createRestaurantDetailItem(restaurant) {
  return `
        <div class="katalog-detail" tabindex="0" aria-label="${restaurant.name}">
          <div class="katalog-header">
            <div class="katalog-img">
              <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            </div>
            <div class="katalog-info">
              <h2>${restaurant.name}</h2><br>
              <h4>City : ${restaurant.city}</h4>
              <h4>Rating : ${restaurant.rating}</h4>
              <h4>Address : ${restaurant.address}</h4>
              <p>${restaurant.description}</p><br>
              <h2>Categories</h2><br>
              <div id="categoriesContainer"></div>
            </div>
          </div>
          <section>
            <h2>Menu's</h2><br>
              <div class="katalog-menus">
              <div class="menus-foods">
                <h4>Foods</h4><br/>
                <div id="foodContainer"></div>
              </div>
              <div class="menus-drinks">
                <h4>Drinks</h4><br/>
                <div id="drinkContainer"></div>
              </div>
            </div>
          </section>
          <section>
            <h2>Customer Review's</h2><br>
            <div class="katalog-review">
              <div id="reviewContainer"></div>
            </div>
        </section>
      </div>
    `;
}

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <small>Add</small>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <small>Remove</small>
  </button>
`;

export {
  createRestaurantItem,
  createRestaurantDetailItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
