// require utils.js
// require cards.js
// require templates.js

var cards = window.cards;

function showNRandomCards(container /* jquery elem */, n /* int */) {
    container.html(makeCardsContainerMarkup(makeCardsMarkup(getRandomArrayItems(cards, n))));
}

function showAllCards(container /* jquery elem */) {
    container.html(makeCardsContainerMarkup(makeCardsMarkup(cards)));
}

function showCardLayout(container /* jquery elem */, layoutName) {
    container.html(makeCardsContainerMarkup(makeCardsLayoutElemMarkup(makeLayout(layoutName, cards))));
}

$(function () {
    var cardsContainer = $("[data-inject='cards']");

    // click / tap to toggle zoom lock
    $(document).on('click', '.mg-card', function(event){
        event.stopPropagation();
        $('.mg-card').not(this).removeClass('zoom');
        $(this).toggleClass('zoom');
    });

    // click anywhere other than a card to dismiss / turn off active zoom lock
    // (relies on card click stopPropagation)
    $(document).on('click', function(){
        $('.mg-card').removeClass('zoom');
    })

    // flip / reveal cards
    // (stopPropagation to avoid triggering zoom lock)
    $(document).on('click', '.mg-card-container .mg-card-back:not(.mg-card-back--hidden)', function(event){
        event.stopPropagation();
        $(this).addClass('mg-card-back--hidden')
    })

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

    $("[data-click='show-n-cards']").click(function (event) {
        event.preventDefault();
        var numCards = parseInt($(this).data('nCards'));
        showNRandomCards(cardsContainer, numCards);
    });

    $("[data-click='show-all-cards']").click(function (event) {
        event.preventDefault();
        showAllCards(cardsContainer);
    });

    $('.card-buttons-container [data-click]').click(function (){
        $(this).addClass('active');
        $('.card-buttons-container [data-click]').not(this).removeClass('active');
    });
});