var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(game) {
            this.labelString = "";
            this.lives = constants.PLAYER_LIVES;
            this.score = 0;
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;
            this.game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            //this.labelString = "Lives: " + this.lives.toString() + " Time-Elapsed: " + this.score.toString();
            this.label.text = "Lives: " + this.lives.toString() + " Time-Elapsed: " + time.toString();
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map