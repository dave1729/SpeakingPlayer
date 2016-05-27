var AM = new AssetManager();

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, entity) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var xindex = 0;
    var yindex = 0;  

    if(entity.aKey || entity.iKey || entity.yKey) {
    	yindex = 1;
    }
    else if(entity.oKey || entity.uKey || entity.wKey) {
    	yindex = 2;
    }
    else if(entity.eKey) {
    	yindex = 3;
    }
    else if(entity.sKey || entity.dKey || entity.tKey) {
    	yindex = 4;
    }
    else if(entity.lKey) {
    	yindex = 5;
    }
    else if(entity.mKey) {
    	yindex = 6;
    }
    else if(entity.fKey || entity.vKey) {
    	yindex = 7;
    }
    else if(entity.nKey) {
    	yindex = 8;
    }
    else if(entity.rKey || entity.cKey) {
    	yindex = 9;
    }

    
    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.layer = 1;
    this.control = false;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
};

//no inheritance
function PlayerBody(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.layer = 2;
    this.control = false;
    this.ctx = game.ctx;
};

PlayerBody.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

PlayerBody.prototype.update = function () {
};

function Mouth(game, spritesheet) {
    this.animation = new Animation(spritesheet, 80, 40, 10, 1.0, 10, true, 1.0);
    this.x = 278;
    this.y = 260;
    this.aKey = false;
    this.bKey = false;
    this.cKey = false;
    this.dKey = false;
    this.eKey = false;
    this.fKey = false;
    this.gKey = false;
    this.hKey = false;
    this.iKey = false;
    this.jKey = false;
    this.kKey = false;
    this.lKey = false;
    this.mKey = false;
    this.nKey = false;
    this.oKey = false;
    this.pKey = false;
    this.qKey = false;
    this.rKey = false;
    this.sKey = false;
    this.tKey = false;
    this.uKey = false;
    this.vKey = false;
    this.wKey = false;
    this.xKey = false;
    this.yKey = false;
    this.zKey = false;
    this.speed = 0;
    this.jumping = false;
    this.jumpStartTime = 0;
    this.jumpSpeed = 0;
    this.gravity = 1500;
    this.game = game;
    this.layer = 3;
    this.laps = 0;
    this.facingLeft = false;
    this.control = true;
    this.ctx = game.ctx;
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i = 0; i < 26; i+=1) {
    	this.game.inputmanager.addInput(alpha[i], alpha[i].toLowerCase());
    }
}

Mouth.prototype.draw = function () {
	this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y, this);
}

Mouth.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime)
        this.x += this.game.clockTick * this.speed;
    
    if(this.game.inputmanager.checkInput("A")) {
    	this.aKey = true;
    }
    else {
    	this.aKey = false;
    }
    if(this.game.inputmanager.checkInput("B")) {
    	this.bKey = true;
    }
    else {
    	this.bKey = false;
    }
    if(this.game.inputmanager.checkInput("C")) {
    	this.cKey = true;
    }
    else {
    	this.cKey = false;
    }
    if(this.game.inputmanager.checkInput("D")) {
    	this.dKey = true;
    }
    else {
    	this.dKey = false;
    }
    if(this.game.inputmanager.checkInput("E")) {
    	this.eKey = true;
    }
    else {
    	this.eKey = false;
    }
    if(this.game.inputmanager.checkInput("F")) {
    	this.fKey = true;
    }
    else {
    	this.fKey = false;
    }
    if(this.game.inputmanager.checkInput("G")) {
    	this.gKey = true;
    }
    else {
    	this.gKey = false;
    }
    if(this.game.inputmanager.checkInput("H")) {
    	this.hKey = true;
    }
    else {
    	this.hKey = false;
    }
    if(this.game.inputmanager.checkInput("I")) {
    	this.iKey = true;
    }
    else {
    	this.iKey = false;
    }
    if(this.game.inputmanager.checkInput("J")) {
    	this.jKey = true;
    }
    else {
    	this.jKey = false;
    }
    if(this.game.inputmanager.checkInput("K")) {
    	this.kKey = true;
    }
    else {
    	this.kKey = false;
    }
    if(this.game.inputmanager.checkInput("L")) {
    	this.lKey = true;
    }
    else {
    	this.lKey = false;
    }
    if(this.game.inputmanager.checkInput("M")) {
    	this.mKey = true;
    }
    else {
    	this.mKey = false;
    }
    if(this.game.inputmanager.checkInput("N")) {
    	this.nKey = true;
    }
    else {
    	this.nKey = false;
    }
    if(this.game.inputmanager.checkInput("O")) {
    	this.oKey = true;
    }
    else {
    	this.oKey = false;
    }
    if(this.game.inputmanager.checkInput("P")) {
    	this.pKey = true;
    }
    else {
    	this.pKey = false;
    }
    if(this.game.inputmanager.checkInput("Q")) {
    	this.qKey = true;
    }
    else {
    	this.qKey = false;
    }
    if(this.game.inputmanager.checkInput("R")) {
    	this.rKey = true;
    }
    else {
    	this.rKey = false;
    }
    if(this.game.inputmanager.checkInput("S")) {
    	this.sKey = true;
    }
    else {
    	this.sKey = false;
    }
    if(this.game.inputmanager.checkInput("T")) {
    	this.tKey = true;
    }
    else {
    	this.tKey = false;
    }
    if(this.game.inputmanager.checkInput("U")) {
    	this.uKey = true;
    }
    else {
    	this.uKey = false;
    }
    if(this.game.inputmanager.checkInput("V")) {
    	this.vKey = true;
    }
    else {
    	this.vKey = false;
    }
    if(this.game.inputmanager.checkInput("W")) {
    	this.wKey = true;
    }
    else {
    	this.wKey = false;
    }
    if(this.game.inputmanager.checkInput("X")) {
    	this.xKey = true;
    }
    else {
    	this.xKey = false;
    }
    if(this.game.inputmanager.checkInput("Y")) {
    	this.yKey = true;
    }
    else {
    	this.yKey = false;
    }
    if(this.game.inputmanager.checkInput("Z")) {
    	this.zKey = true;
    }
    else {
    	this.zKey = false;
    }
    Entity.prototype.update.call(this);
}

AM.queueDownload("./img/Black.png");
AM.queueDownload("./img/IntroFace.png");
AM.queueDownload("./img/Mouth.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/Black.png")));
    gameEngine.addEntity(new PlayerBody(gameEngine, AM.getAsset("./img/IntroFace.png")));
    gameEngine.addEntity(new Mouth(gameEngine, AM.getAsset("./img/Mouth.png")));

    // ctx.drawImage(img,
            // 0, 0,  // source from sheet
            // 189, 230, // width and height of source
            // 250, 250, // destination coordinates
            // 95, 115); // destination width and height
    
    console.log("All Done!");
});