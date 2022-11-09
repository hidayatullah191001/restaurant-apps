import './MenusItem';

class MenusList extends HTMLElement {
  set menus(menu) {
    this._menus = menu;
    this.render();
  }

  render() {
    this._menus.forEach((menu) => {
      const menuItemElement = document.createElement('menu-item');
      // memanggil fungsi setter article() pada article-item.
      menuItemElement.menu = menu;
      this.appendChild(menuItemElement);
    });
  }
}

customElements.define('menus-list', MenusList);
