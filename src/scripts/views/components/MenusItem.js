class MenusItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = `
              <p>${this._menu.name}</p>
            `;
  }
}

customElements.define('menu-item', MenusItem);
