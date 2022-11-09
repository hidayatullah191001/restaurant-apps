import './CategoriesItem';

class CategoriesList extends HTMLElement {
  set categories(categorie) {
    this._categories = categorie;
    this.render();
  }

  render() {
    this._categories.forEach((categorie) => {
      const categorieItemElement = document.createElement('categorie-item');
      // memanggil fungsi setter article() pada article-item.
      categorieItemElement.categorie = categorie;
      this.appendChild(categorieItemElement);
    });
  }
}

customElements.define('categories-list', CategoriesList);
