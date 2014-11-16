module objects {
    // Tracks Class
    export class Tracks extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("tracks"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = 0;
        }

        update() {
            
            this.x -= this.dx;
            if (this.x <= -65) {
                this.reset();
            }
        }
    }
}  