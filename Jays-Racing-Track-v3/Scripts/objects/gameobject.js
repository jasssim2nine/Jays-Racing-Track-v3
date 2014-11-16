var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(spriteString, game) {
            _super.call(this, managers.Asset.atlas, spriteString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = 34;
            this.regY = 70;
            this.game = game;
        }
        return GameObject;
    })(createjs.Sprite);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map