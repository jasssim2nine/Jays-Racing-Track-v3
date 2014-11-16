/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/tracks.ts" />
/// <reference path="../objects/bike.ts" />
var states;
(function (states) {
    function menuState() {
        tracks.update();
        bike.update();
    }
    states.menuState = menuState;
    function Menu() {
        createjs.Sound.play('startup');
        var racingText;
        var instructionText;
        game = new createjs.Container();
        tracks = new objects.Tracks(game);
        bike = new objects.Bike(game);
        racingText = new createjs.Text("PLAY", constants.GAME_FONT, constants.FONT_COLOUR);
        racingText.regX = racingText.getBounds().width * 0.5;
        racingText.regY = racingText.getBounds().height * 0.5;
        racingText.x = stage.canvas.width * 0.5;
        racingText.y = stage.canvas.height * 0.25;
        game.addChild(racingText);
        racingText.addEventListener("click", function (e) {
            stage.removeChild(game);
            createjs.Sound.removeSound('play', 'assest/sounds/theme.mp3');
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });
        instructionText = new createjs.Text("INSTRUCTIONS", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionText.regX = instructionText.getBounds().width * 0.5;
        instructionText.regY = instructionText.getBounds().height * 0.5;
        instructionText.x = stage.canvas.width * 0.5;
        instructionText.y = stage.canvas.height * 0.35;
        game.addChild(instructionText);
        instructionText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.INSTRUCTIONS_STATE;
            changeState(currentState);
        });
        stage.addChild(game);
    }
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map