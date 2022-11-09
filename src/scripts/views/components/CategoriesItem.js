class CategorieItem extends HTMLElement {
  set categorie(categorie) {
    this._categorie = categorie;
    this.render();
  }

  render() {
    this.innerHTML = `
            <p><strong>${this._categorie.name}</strong></p>
          `;
  }
}

customElements.define('categorie-item', CategorieItem);
