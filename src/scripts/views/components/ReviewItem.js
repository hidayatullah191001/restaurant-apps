class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="card-review">
            <h3>${this._review.name}</h3>
            <h6>${this._review.date}</h6>
            <p>${this._review.review}</p>
          </div>
        `;
  }
}

customElements.define('review-item', ReviewItem);
