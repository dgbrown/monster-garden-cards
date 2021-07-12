// require utils.js

window.cardBackImgPath = 'back.jpg'

window.cards = [
    { 'imgPath': 'cards/adventure.jpg' },
    { 'imgPath': 'cards/baby.jpg' },
    { 'imgPath': 'cards/blue men.jpg' },
    { 'imgPath': 'cards/bobos.jpg' },
    { 'imgPath': 'cards/booty biker boys.jpg' },
    { 'imgPath': 'cards/creation.jpg' },
    { 'imgPath': 'cards/d cart.jpg' },
    { 'imgPath': 'cards/distance.jpg' },
    { 'imgPath': 'cards/doofter.jpg' },
    { 'imgPath': 'cards/drizzy.jpg' },
    { 'imgPath': 'cards/feb.jpg' },
    { 'imgPath': 'cards/foofter.jpg' },
    { 'imgPath': 'cards/fryer.jpg' },
    { 'imgPath': 'cards/gatekeeper.jpg' },
    { 'imgPath': 'cards/harmony.jpg' },
    { 'imgPath': 'cards/invention.jpg' },
    { 'imgPath': 'cards/jelly pot.jpg' },
    { 'imgPath': 'cards/joy.jpg' },
    { 'imgPath': 'cards/knowing[.jpg' },
    { 'imgPath': 'cards/leg dog.jpg' },
    { 'imgPath': 'cards/love.jpg' },
    { 'imgPath': 'cards/lucky!.jpg' },
    { 'imgPath': 'cards/mel.jpg' },
    { 'imgPath': 'cards/monskros.jpg' },
    { 'imgPath': 'cards/monster fruit.jpg' },
    { 'imgPath': 'cards/mr bobo.jpg' },
    { 'imgPath': 'cards/muuutsch.jpg' },
    { 'imgPath': 'cards/party.jpg' },
    { 'imgPath': 'cards/perception.jpg' },
    { 'imgPath': 'cards/precision.jpg' },
    { 'imgPath': 'cards/q.jpg' },
    { 'imgPath': 'cards/ready.jpg' },
    { 'imgPath': 'cards/release.jpg' },
    { 'imgPath': 'cards/roofy.jpg' },
    { 'imgPath': 'cards/sparkling seedling.jpg' },
    { 'imgPath': 'cards/squares.jpg' },
    { 'imgPath': 'cards/star.jpg' },
    { 'imgPath': 'cards/strength.jpg' },
    { 'imgPath': 'cards/take the lead.jpg' },
    { 'imgPath': 'cards/tenty.jpg' },
    { 'imgPath': 'cards/the boss.jpg' },
    { 'imgPath': 'cards/tifa.jpg' },
    { 'imgPath': 'cards/tookis.jpg' },
    { 'imgPath': 'cards/white diamond.jpg' },
];

function makeLayoutFromRowWidths(deck /* card[] */, rowWidths /* int[] ex. [2, 1, 3] */) /* : card[][] card layout */ {
    var layout = []
    var numCards = 0;
    for (var i = 0; i < rowWidths.length; i++) {
        numCards += rowWidths[i];
    }
    var cards = getRandomArrayItems(deck, 6); // is this a bug? I think 6 should really be sum(rowWidths)
    var cardI = 0;
    for (var i = 0; i < rowWidths.length; i++) {
        var rowWidth = rowWidths[i];
        layout[i] = [];
        for (var j = 0; j < rowWidth; j++) {
            layout[i][j] = cards[i++]
        }
    }
    return layout;
}

function makeLayout(type, deck /* card[] */) /* : card[][] */ {
    if (type === 'testLayout') {
        var cards = getRandomArrayItems(deck, 6);
        var i = 0;
        return [
            [cards[i++], cards[i++]],
            [cards[i++]],
            [cards[i++], cards[i++], cards[i++]]
        ]
    }
}