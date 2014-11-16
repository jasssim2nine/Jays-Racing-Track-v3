/// <reference path="../constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/bike.ts" />
/// <reference path="objects/speedbraker.ts" />
/// <reference path="objects/tracks.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
/*
Name : Jasim Mehdi Ali Khan
Student id: 200263011

Purpose : To create a 2d Scrolling backgroud game using typescript. race.ts is the main typescript file which runs in the
background with required functions and classes


*/
var stage;
var game;
// game objects
var bike;
var speedbrakers = [];
var tracks;
var scoreboard;
var currentState;
var currentStateFunction;
//preload function
function preload() {
    managers.Asset.init();
    managers.Asset.loader.addEventListener("complete", init);
}
//function init
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    currentState = constants.MENU_STATE;
    changeState(currentState);
    gameStart();
}
//gameLoop function
function gameLoop() {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            currentStateFunction = states.menuState;
            states.Menu();
            break;
        case constants.PLAY_STATE:
            currentStateFunction = states.playState;
            states.Play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            states.GameOver();
            break;
        case constants.INSTRUCTIONS_STATE:
            currentStateFunction = states.instructionState;
            states.instructions();
            break;
    }
}
function distance(firstPoint, secondPoint) {
    var p1;
    var p2;
    var theXs;
    var theYs;
    var result;
    p1 = new createjs.Point();
    p2 = new createjs.Point();
    p1.x = firstPoint.x;
    p1.y = firstPoint.y;
    p2.x = secondPoint.x;
    p2.y = secondPoint.y;
    theXs = p2.x - p1.x;
    theYs = p2.y - p1.y;
    theXs = theXs * theXs;
    theYs = theYs * theYs;
    result = Math.sqrt(theXs + theYs);
    return result;
}
function bikeAndspeedBraker(s1) {
    var p1 = new createjs.Point();
    var p2 = new createjs.Point();
    var speedbraker = new objects.speedBraker(game);
    speedbraker = s1;
    p1.x = bike.x;
    p1.y = bike.y;
    p2.x = speedbraker.x;
    p2.y = speedbraker.y;
    if (distance(p1, p2) <= (38)) {
        scoreboard.lives -= 1;
        speedbraker.reset();
    }
}
function collisionCheck() {
    for (var count = 0; count < constants.SPEEDBRAKER_NUM; count++) {
        bikeAndspeedBraker(speedbrakers[count]);
    }
}
function gameStart() {
}
//# sourceMappingURL=race.js.map