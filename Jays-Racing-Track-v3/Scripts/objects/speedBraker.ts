module objects {
    // Tracks Class
    export class speedBraker extends createjs.Bitmap {
        width: number;
        height: number;
        game: createjs.Container;
        dx: number;
        constructor(game: createjs.Container) {
            super(managers.Asset.loader.getResult("speedbraker"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.game = game;
            this.dx = 5;
            this.game.addChild(this);
            this.reset();
        }

        reset() {
            var randomVariable1 = Math.floor(Math.random() * 100);
            this.y = stage.canvas.width;

            if (randomVariable1 < 49) {
                this.x = stage.canvas.width +999;
                this.y = 440;

            }
            else if (randomVariable1 >= 51) {
                this.x = stage.canvas.width + 99 ;
                this.y = 520;

            }
            
        }

        update() {
            this.x -= this.dx;
            if (this.x <= 0) {
                this.reset();
            }
        }
    }
}  


















