/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bike.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/tracks.ts" />
var states;
(function (states) {
    function instructionState() {
        tracks.update();
    }
    states.instructionState = instructionState;
    function instructions() {
        var instructionsText;
        game = new createjs.Container();
        instructionsText = new createjs.Text("Heillloooowweroi;as;ldkfj", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionsText.regX = instructionsText.getBounds().width * 0.5;
        instructionsText.regY = instructionsText.getBounds().height * 0.5;
        instructionsText.x = stage.canvas.width * 0.5;
        instructionsText.y = stage.canvas.height * 0.5;
        game.addChild(instructionsText);
        instructionsText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });
        stage.addChild(game);
    }
    states.instructions = instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map