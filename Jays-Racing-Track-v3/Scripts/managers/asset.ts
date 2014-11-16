module managers {

    export class Asset {

        static loader;
        static atlas: createjs.SpriteSheet;

        static spriteSheetData = {
            "images": ["/assets/images/bikeatlas.png"],
            
            "frames": [

                [2, 2, 72, 82],
                [74, 0, 70, 82]
            ],
            "animations": {

                "bike": {
                    frames: [0, 1],
                    speed :0.40
                },
            }
        }

        static manifest = [
            { id: "speedbraker", src: "assets/images/speedbraker.png" },
            { id: "tracks", src: "assets/images/tracks.png" } ,
             {id : "startup", src: "assets/sounds/theme.mp3"},
             { id: "play", src: "assets/sounds/play.mp3" },
            { id: "gameover", src: "assets/sounds/gameover.mp3" }
        ];

        static init() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);
        
          
            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);

        }


    }
}  