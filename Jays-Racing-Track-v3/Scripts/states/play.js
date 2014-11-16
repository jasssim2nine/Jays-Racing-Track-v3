/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bike.ts" />
/// <reference path="../objects/tracks.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function playState() {
        tracks.update();
        for (var count = 0; count < constants.SPEEDBRAKER_NUM; count++) {
            speedbrakers[count].update();
        }
        bike.update();
        collisionCheck();
        scoreboard.update();
        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    function Play() {
        game = new createjs.Container();
        var logoText;
        tracks = new objects.Tracks(game);
        for (var count = 0; count < constants.SPEEDBRAKER_NUM; count++) {
            speedbrakers[count] = new objects.speedBraker(game);
        }
        bike = new objects.Bike(game);
        scoreboard = new objects.Scoreboard(game);
        logoText = new createjs.Text("Jays Racing Track", constants.LOGO_FONT, constants.LOGO_COLOUR);
        logoText.regX = logoText.getBounds().width * 0.5;
        logoText.regY = logoText.getBounds().height * 0.5;
        logoText.x = stage.canvas.width * 0.5;
        logoText.y = 170;
        game.addChild(logoText);
        stage.addChild(game);
    }
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map