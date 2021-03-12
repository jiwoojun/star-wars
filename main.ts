namespace SpriteKind {
    export const sidekick = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    setActivePlayer((active_player_index + 1) % 2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Luke_Skywalkers_lightsaver = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . 9 9 
        . . . . . . . . . . . . . 9 9 . 
        . . . . . . . . . . . . 9 9 . . 
        . . . . . . . . . . . 9 9 . . . 
        . . . . . . . . . . 9 9 . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . 9 9 . . . . . . . . . 
        . . . . 9 9 . . . . . . . . . . 
        . . . 9 9 . . . . . . . . . . . 
        . . 9 9 . . . . . . . . . . . . 
        . 9 9 . . . . . . . . . . . . . 
        d 9 . . . . . . . . . . . . . . 
        d . . . . . . . . . . . . . . . 
        `, Luke_Skywalker, 50, 0)
    yodas_lightsaver = sprites.createProjectileFromSprite(img`
        . . . . . . 7 7 
        . . . . . 7 7 . 
        . . . . 7 7 . . 
        . . . 7 7 . . . 
        . . 7 7 . . . . 
        . 7 7 . . . . . 
        1 7 . . . . . . 
        1 . . . . . . . 
        `, yoda, 50, 0)
})
function setActivePlayer (playerID: number) {
    controller.moveSprite(Luke_Skywalker, 0, 0)
    controller.moveSprite(yoda, 0, 0)
    active_player_index = playerID
    if (active_player_index == 0) {
        active_player_sprite = Luke_Skywalker
    } else {
        active_player_sprite = yoda
    }
    controller.moveSprite(active_player_sprite)
    scene.cameraFollowSprite(active_player_sprite)
}
let active_player_sprite: Sprite = null
let yodas_lightsaver: Sprite = null
let Luke_Skywalkers_lightsaver: Sprite = null
let active_player_index = 0
let yoda: Sprite = null
let Luke_Skywalker: Sprite = null
Luke_Skywalker = sprites.create(img`
    ........eee.........
    .......e111e........
    .......e1e1e........
    .......eedee........
    .......efdfe........
    .......efdfe........
    .......e111e........
    .......e111e........
    .......e111e........
    ....eeeeeeeeeee.....
    ....eeee141eeee.....
    ....eeee141eeee.....
    ....eeee141eeee.....
    ....eeee141eeee.....
    ....eeee141eeee.....
    .....eee141eee......
    .....eee141eee......
    .....eee111eee......
    .....eee111eee......
    .....eee111eee......
    ......ee111ee.......
    ......ee551ee.......
    ......ee155ee.......
    ......eee4eee.......
    ......ee111ee.......
    .....eee111eee......
    .....ee11111ee......
    .....ee11111ee......
    .....ee11111ee......
    .....ee11111ee......
    ....eee11111eee.....
    ....ee1111111ee.....
    ....ee1111111ee.....
    ....ee1111111ee.....
    ....eeddd.dddee.....
    `, SpriteKind.Player)
yoda = sprites.create(img`
    .........77.....
    ........7777....
    ....777777777777
    ......77f77f77..
    ......77f77f77..
    .......777777...
    ........11e1....
    ........11e1....
    ......771ee177..
    ......77111177..
    ........1111....
    .......11111....
    .......111111...
    ......1111111...
    ......111ee111..
    ......111ee111..
    ......111ee111..
    .......77..77...
    ................
    ................
    `, SpriteKind.sidekick)
controller.moveSprite(Luke_Skywalker)
controller.moveSprite(yoda)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Luke_Skywalker)
scene.cameraFollowSprite(yoda)
