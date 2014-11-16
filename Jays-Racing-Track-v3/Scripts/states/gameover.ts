/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/bike.ts" />
/// <reference path="../objects/speedbraker.ts" />
/// <reference path="../objects/tracks.ts" />


module states {

    export function gameOverState() {
        
    }

    export function GameOver() {
        var gameOverText: createjs.Text;
        var TimeText: createjs.Text;
        var TimeElapsed: createjs.Text;
        var TryAgainText: createjs.Text;
        createjs.Sound.play('gameover');
        game = new createjs.Container();

        tracks = new objects.Tracks(game);


        gameOverText = new createjs.Text("Game Over", constants.GAME_FONT, constants.FONT_COLOUR);
        gameOverText.regX = gameOverText.getBounds().width * 0.5;
        gameOverText.regY = gameOverText.getBounds().height * 0.5;
        gameOverText.x = stage.canvas.width * 0.5;
        gameOverText.y = 50;
        game.addChild(gameOverText);

        TimeElapsed = new createjs.Text("Time Elapsed in milliseconds : ", constants.GAME_FONT, constants.FONT_COLOUR);
        TimeElapsed.regX = TimeElapsed.getBounds().width * 0.5;
        TimeElapsed.regY = TimeElapsed.getBounds().height * 0.5;
        TimeElapsed.x = stage.canvas.width * 0.5;
        TimeElapsed.y = 180;
        game.addChild(TimeElapsed);


        TimeText = new createjs.Text(time.toString(), constants.GAME_FONT, constants.FONT_COLOUR);
        TimeText.regX = TimeText.getBounds().width * 0.5;
        TimeText.regY = TimeText.getBounds().height * 0.5;
        TimeText.x = stage.canvas.width *0.5;
        TimeText.y = 235;
        game.addChild(TimeText);


        TryAgainText = new createjs.Text("TRY AGAIN", constants.GAME_FONT, constants.FONT_COLOUR);
        TryAgainText.regX = gameOverText.getBounds().width * 0.5;
        TryAgainText.regY = gameOverText.getBounds().height * 0.5;
        TryAgainText.x = stage.canvas.width * 0.5;
        TryAgainText.y = stage.canvas.height * 0.5;
        game.addChild(TryAgainText);


        TryAgainText.addEventListener("click", function (e) {
            time = 0;
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.MENU_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }

}   