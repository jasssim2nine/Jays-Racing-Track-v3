// Bike Class
module objects {
    export class Bike extends objects.GameObject {
        constructor(game: createjs.Container) {
            super("bike", game);
            this.x  = 100;
            this.y = 460;

            this.game.addChild(this);
        }

        update() {
            if (stage.mouseY <= 560 && stage.mouseY >= 420) {

                this.y = stage.mouseY;
            }
        }
    }
}