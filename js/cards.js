// require utils.js

window.cards = [
    "img/10_precision_card.jpg",
    "img/11_ready_card.jpg",
    "img/12_invention_card.jpg",
    "img/13_joy_card.jpg",
    "img/14_bobo_card.jpg",
    "img/15_baby_card.jpg",
    "img/16_dcart_card.jpg",
    "img/17_feb_card.jpg",
    "img/18_fryer_card.jpg",
    "img/19_mel_card.jpg",
    "img/1_love_card.jpg",
    "img/20_roofy_card.jpg",
    "img/21_tifa_card.jpg",
    "img/22_q_card.jpg",
    "img/23_foofter_card.jpg",
    "img/24_tookis_card.jpg",
    "img/25_bobos_card.jpg",
    "img/26_jellypot_card.jpg",
    "img/27_tenty_card.jpg",
    "img/28_doofter_card.jpg",
    "img/29_BlueMen_card.jpg",
    "img/2_claritytarot.jpg",
    "img/30_drizzy_card.jpg",
    "img/31_squares_card.jpg",
    "img/32_sparklingseedling_card.jpg",
    "img/33_booty biker boys.jpg",
    "img/34_boss.jpg",
    "img/35_legdog.jpg",
    "img/36_monskros.jpg",
    "img/37_monsterfruit.jpg",
    "img/38_muuutsch.jpg",
    "img/39_party.jpg",
    "img/3_understanding_card.jpg",
    "img/40_white diamond.jpg",
    "img/4_gatekeeper_card.jpg",
    "img/5_strength_card.jpg",
    "img/6_takethelead_card.jpg",
    "img/7_connection_card.jpg",
    "img/8_creation_card.jpg",
    "img/9_distance_card.jpg"
];

/* a CardLayout takes the following form
[
    ["image_path_1", "image_path_2"],
    ["image_path_3"],
    ["image_path_4", "image_path_5", "image_path_6"],
]
*/

function makeLayoutFromRowWidths(deck, rowWidths /* int[] ex. [2, 1, 3] */) /* : string[][] card layout */ {
    var layout = []
    var numCards = 0;
    for (var i = 0; i < rowWidths.length; i++) {
        numCards += rowWidths[i];
    }
    var cardPaths = getRandomArrayItems(deck, 6);
    var cardI = 0;
    for (var i = 0; i < rowWidths.length; i++) {
        var rowWidth = rowWidths[i];
        layout[i] = [];
        for (var j = 0; j < rowWidth; j++) {
            layout[i][j] = cardPaths[i++]
        }
    }
    return layout;
}

function makeLayout(type, deck /* string[] card paths */) /* : card layout */{
    if(type === 'testLayout'){
        var cardPaths = getRandomArrayItems(deck, 6);
        var i = 0;
        return [
            [cardPaths[i++], cardPaths[i++]],
            [cardPaths[i++]],
            [cardPaths[i++], cardPaths[i++], cardPaths[i++]]
        ]
    }
}