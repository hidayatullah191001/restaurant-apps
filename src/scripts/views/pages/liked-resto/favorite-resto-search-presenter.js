class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurant, view }) {
      this._view = view;
      this._listenToSearchRequestByUser();
      this._favoriteRestaurant = favoriteRestaurant;
    }
  
    _listenToSearchRequestByUser() {
      this._view.runWhenUserIsSearching((latestQuery) => {
        this._searchRestaurant(latestQuery);
      });
    }
  
    async _searchRestaurant(latestQuery) {
      this._latestQuery = latestQuery.trim();
  
      let foundResto;
      if (this.latestQuery.length > 0) {
        foundResto = await this._favoriteRestaurant.searchRestaurant(this.latestQuery);
      } else {
        foundResto = await this._favoriteRestaurant.getAllRestaurant();
      }
  
      this._showFoundRestaurant(foundResto);
    }
  
    _showFoundRestaurant(resto) {
      this._view.showFavoriteRestaurant(resto);
    }
  
    get latestQuery() {
      return this._latestQuery;
    }
  }
  
  export default FavoriteRestaurantSearchPresenter;
  