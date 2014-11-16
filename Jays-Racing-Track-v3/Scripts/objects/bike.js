var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// Bike Class
var objects;
(function (objects) {
    var Bike = (function (_super) {
        __extends(Bike, _super);
        function Bike(game) {
            _super.call(this, "bike", game);
            this.x = 100;
            this.y = 460;
            this.game.addChild(this);
        }
        Bike.prototype.update = function () {
            if (stage.mouseY <= 560 && stage.mouseY >= 420) {
                this.y = stage.mouseY;
            }
        };
        return Bike;
    })(objects.GameObject);
    objects.Bike = Bike;
})(objects || (objects = {}));
//# sourceMappingURL=bike.js.map