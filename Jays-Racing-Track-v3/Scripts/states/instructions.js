/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bike.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/tracks.ts" />
var states;
(function (states) {
    function instructionState() {
        bike.update();
    }
    states.instructionState = instructionState;
    function instructions() {
        var instructionsText;
        var instructionsLine1;
        var instructionsLine2;
        var instructionsLine3;
        var instructionsBackText;
        game = new createjs.Container();
        tracks = new objects.Tracks(game);
        bike = new objects.Bike(game);
        instructionsText = new createjs.Text("INSTRUCTIONS", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionsText.regX = instructionsText.getBounds().width * 0.5;
        instructionsText.regY = instructionsText.getBounds().height * 0.5;
        instructionsText.x = stage.canvas.width * 0.5;
        instructionsText.y = stage.canvas.height * 0.20;
        game.addChild(instructionsText);
        instructionsLine1 = new createjs.Text("1. Control the player with the mouse cursor.", constants.INSTRUCTIONS_FONT, constants.INSTRUCTIONS_COLOUR);
        instructionsLine1.regX = instructionsLine1.getBounds().width * 0.5;
        instructionsLine1.regY = instructionsLine1.getBounds().height * 0.5;
        instructionsLine1.x = stage.canvas.width * 0.5;
        instructionsLine1.y = stage.canvas.height * 0.3;
        game.addChild(instructionsLine1);
        instructionsLine2 = new createjs.Text("2.Avoid the speedbrakers.", constants.INSTRUCTIONS_FONT, constants.INSTRUCTIONS_COLOUR);
        instructionsLine2.regX = instructionsLine2.getBounds().width * 0.5;
        instructionsLine2.regY = instructionsLine2.getBounds().height * 0.5;
        instructionsLine2.x = stage.canvas.width * 0.5;
        instructionsLine2.y = stage.canvas.height * 0.4;
        game.addChild(instructionsLine2);
        instructionsLine3 = new createjs.Text("3.Maximum time elapsed to survive is your score.", constants.INSTRUCTIONS_FONT, constants.INSTRUCTIONS_COLOUR);
        instructionsLine3.regX = instructionsLine3.getBounds().width * 0.5;
        instructionsLine3.regY = instructionsLine3.getBounds().height * 0.5;
        instructionsLine3.x = stage.canvas.width * 0.5;
        instructionsLine3.y = stage.canvas.height * 0.5;
        game.addChild(instructionsLine3);
        instructionsBackText = new createjs.Text("Back", constants.GAME_FONT, constants.FONT_COLOUR);
        instructionsBackText.regX = instructionsBackText.getBounds().width * 0.5;
        instructionsBackText.regY = instructionsBackText.getBounds().height * 0.5;
        instructionsBackText.x = stage.canvas.width * 0.5;
        instructionsBackText.y = stage.canvas.height * 0.7;
        game.addChild(instructionsBackText);
        instructionsBackText.addEventListener("click", function (e) {
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