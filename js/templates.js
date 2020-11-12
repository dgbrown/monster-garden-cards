// require Ramda.js

function makeCardElemMarkup(cardImagePath /* string */) /* : html string */ {
    return "<img class='mg-card img-fluid mx-auto' src='" + cardImagePath + "'/>";
}

function makeCardsLayoutElemMarkup(cardLayout /* string[][] */) /* : string */ {
    var elemMarkup = "";
    for (var i = 0; i < cardLayout.length; i++) {
        var numCardsInRow = cardLayout[i].length;
        var rowMarkup = "<div class='row row-cols-" + 5 + " justify-content-center mg-card-row'>";
        for (var j = 0; j < numCardsInRow; j++) {
            rowMarkup += "<div class='col'>"+makeCardElemMarkup(cardLayout[i][j])+"</div>";
        }
        rowMarkup += "</div>"
        elemMarkup += rowMarkup;
    }
    return elemMarkup;
}

function makeCardsMarkup(cards /* string[] card img paths */, rowWidth = 5) /* : string */ {
    var cardGroups = R.splitEvery(rowWidth, cards);
    var markup = "";
    for (var i = 0; i < cardGroups.length; i++) {
        markup += "<div class='row row-cols-"+rowWidth+" mg-card-row justify-content-center'>"
        for(var j = 0; j < cardGroups[i].length; j++){
            markup += "<div class='col'>"+makeCardElemMarkup(cardGroups[i][j])+"</div>";
        }
        markup += "</div>";
    }
    markup += "</div>";
    return markup;
}