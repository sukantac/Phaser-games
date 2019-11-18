class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	this.load.image("pp", "images/pp.png");
    }
    create() {
       // this.pp = this.add.image(100, 200, "pp");
       this.pp = this.add.sprite(100, 200, "pp");
        this.pp.alpha = .5;
        this.pp.angle=45;
        this.pp.scaleX=.5;
        this.pp.scaleY=.5;

    }
    update() {}
}