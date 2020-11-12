// require utils.js
// require cards.js
// require templates.js

var cards = window.cards;

function showNRandomCards(container /* jquery elem */, n /* int */) {
    container.html(makeCardsMarkup(getRandomArrayItems(cards, n)));
}

function showAllCards(container /* jquery elem */) {
    container.html(makeCardsMarkup(cards));
}

function showCardLayout(container /* jquery elem */, layoutName) {
    container.html(makeCardsLayoutElemMarkup(makeLayout(layoutName, cards)));
}

$(function () {
    var cardsContainer = $("[data-inject='cards']");

    /* for mobile */
    $(document).on('click', '.mg-card', function(){
        $('.mg-card').not(this).removeClass('zoom');
        $(this).toggleClass('zoom');
    });

    $("[data-click='show-card-layout']").click(function (event) {
        event.preventDefault();
        var layout = $(this).data('cardLayout');
        showCardLayout(cardsContainer, layout);
    });

    $("[data-form-submit='show-n-cards']").submit(function (event) {
        event.preventDefault();
        var input = getFormValuesKVP($(this));
        var numCards = parseInt(input['numCards']);
        showNRandomCards(cardsContainer, numCards);
    });

    $("[data-click='show-all-cards']").click(function (event) {
        event.preventDefault();
        showAllCards(cardsContainer);
    });
});