var game;
window.onload = function()
{
    var config = {
        type: Phaser.Auto,
        width: 480,
        height: 540,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
     game = new Phaser.Game(config);
}