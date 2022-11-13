import { createRestaurantItem } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `  
      <div>
        <center>
          <h1>Favorite List of Restaurant's</h1>
          <input id="query" type="text" placeholder="Please entry keyword...">
          </center>
        <br>
        <div id="restaurant" class="katalog-list"></div>
      </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(resto) {
    this.showFavoriteRestaurant(resto);
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, resto) => carry.concat(createRestaurantItem(resto)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurant').innerHTML = html;

    document.getElementById('restaurant').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-not-found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
