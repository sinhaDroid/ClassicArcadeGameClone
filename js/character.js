var enableCharacterSelection; /* function gameStop in app.js calls this */
var disableCharacterSelection; /* function gameStart in app.js calls this */

$(function(){

    var catOne = $('#cat-one');
    var catTwo = $('#cat-two');
    var catThree = $('#cat-three');

    var characters = [catOne, catTwo, catThree];

    // char-boy is default character/player
    catOne.css({'background-color': "wheat"}).addClass("active");
    cat.setSprite();

    var resetCharBackground = function(){
        for (var i = 0; i < characters.length; i++) {
            characters[i].animate({'background-color': "#202020"}, 0).removeClass("active");
        }
    };

    var selectCharacter = function(that) {
        $(that).animate({'background-color': "wheat"}, 1000).addClass("active");
        cat.setSprite();
    };

    // enable character selection before and after a game
    enableCharacterSelection = function(){
        for (var i = 0; i < characters.length; i++) {
            characters[i].click(function(){
                resetCharBackground();
                selectCharacter(this);
            })
        }
     };
    // call this function to enable character selection before the first game is started
    // enableCharacterSelection cannot be a self calling function, because it is also called
    // from the function gameStop in app.js
    enableCharacterSelection();

    // disable character selection during a game
    disableCharacterSelection = function(){
        for (var i = 0; i < characters.length; i++) {
            characters[i].off("click");
        }
    };

})