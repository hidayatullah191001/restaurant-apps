import './ReviewItem';

class ReviewList extends HTMLElement {
  set reviews(review) {
    this._reviews = review;
    this.render();
  }

  render() {
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      // memanggil fungsi setter article() pada article-item.
      reviewItemElement.review = review;
      this.appendChild(reviewItemElement);
    });
  }
}

customElements.define('review-list', ReviewList);
