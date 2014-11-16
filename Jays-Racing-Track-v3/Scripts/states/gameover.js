/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bike.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/tracks.ts" />
var states;
(function (states) {
    function gameOverState() {
    }
    states.gameOverState = gameOverState;
    function GameOver() {
        var gameOverText;
        var ScoreText;
        game = new createjs.Container();
        tracks = new objects.Tracks(game);
        ScoreText = new createjs.Text(scoreboard.score.toString(), constants.GAME_FONT, constants.FONT_COLOUR);
        ScoreText.regX = ScoreText.getBounds().width * 0.5;
        ScoreText.regY = ScoreText.getBounds().height * 0.5;
        ScoreText.x = stage.canvas.width * 0.5;
        ScoreText.y = 180;
        game.addChild(ScoreText);
        gameOverText = new createjs.Text("Game Over", constants.GAME_FONT, constants.FONT_COLOUR);
        gameOverText.regX = gameOverText.getBounds().width * 0.5;
        gameOverText.regY = gameOverText.getBounds().height * 0.5;
        gameOverText.x = stage.canvas.width * 0.5;
        gameOverText.y = stage.canvas.height * 0.5;
        game.addChild(gameOverText);
        gameOverText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });
        stage.addChild(game);
    }
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map