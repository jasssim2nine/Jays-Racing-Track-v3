var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Tracks Class
    var speedBraker = (function (_super) {
        __extends(speedBraker, _super);
        function speedBraker(game) {
            _super.call(this, managers.Asset.loader.getResult("speedbraker"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }
        speedBraker.prototype.reset = function () {
            var randomVariable1 = Math.floor(Math.random() * 100);
            this.y = stage.canvas.width;
            if (randomVariable1 < 49) {
                this.x = stage.canvas.width + 999;
                this.y = 440;
            }
            else if (randomVariable1 >= 51) {
                this.x = stage.canvas.width + 99;
                this.y = 520;
            }
        };
        speedBraker.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= 0) {
                this.reset();
            }
        };
        return speedBraker;
    })(createjs.Bitmap);
    objects.speedBraker = speedBraker;
})(objects || (objects = {}));
//# sourceMappingURL=speedBraker.js.map