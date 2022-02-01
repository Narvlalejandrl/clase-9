controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-2)
})
info.onLifeZero(function () {
    game.over(true, effects.bubbles)
})
let mySprite = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 1 1 1 1 1 7 7 7 1 1 1 1 1 7 7 
    7 1 1 1 1 1 7 7 7 1 1 1 1 1 7 7 
    7 1 1 f f f 7 7 7 f f f 1 1 7 7 
    7 1 1 f f f 7 7 7 f f f 1 1 7 7 
    7 1 1 f f f 7 7 7 f f f 1 1 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 
    7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 
    7 7 7 7 4 4 4 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
mySprite.setPosition(120, 31)
tiles.setTilemap(tilemap`level1`)
info.setScore(10)
info.setLife(6)
