const assert = require('assert');
 
Feature('UnLiking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not-found');
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not-found');

    I.amOnPage('/');

    I.waitForElement('.katalog-item a', 5);
    I.seeElement('.katalog-item a');

    const firstResto = locate('.katalog-item a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.waitForElement('.like', 5);
    I.seeElement('.like');
    I.click('.like');

    I.amOnPage('/#/favorite');

    I.waitForElement('.card', 5);
    I.seeElement('.card');
    const likedRestoName = await I.grabTextFrom('.katalog-item h3');
    assert.strictEqual(firstRestoName, likedRestoName);

    I.waitForElement('.katalog-item a', 5);
    I.seeElement('.katalog-item a');

    const firstRestoFavorite = locate('.katalog-item a').first();
    I.click(firstRestoFavorite);

    I.waitForElement('.like', 5);
    I.seeElement('.like');
    I.click('.like');
    
    I.amOnPage('/#/favorite');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not-found');

});


