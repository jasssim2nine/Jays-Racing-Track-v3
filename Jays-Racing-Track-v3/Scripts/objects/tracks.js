var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Tracks Class
    var Tracks = (function (_super) {
        __extends(Tracks, _super);
        function Tracks(game) {
            _super.call(this, managers.Asset.loader.getResult("tracks"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }
        Tracks.prototype.reset = function () {
            this.x = 0;
        };
        Tracks.prototype.update = function () {
            this.x -= this.dx;
            if (this.x <= -65) {
                this.reset();
            }
        };
        return Tracks;
    })(createjs.Bitmap);
    objects.Tracks = Tracks;
})(objects || (objects = {}));
//# sourceMappingURL=tracks.js.map