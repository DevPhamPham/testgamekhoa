enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    nav = "up"
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    statusbar = statusbars.create(10, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite2)
    statusbar.value = 5
    mySprite2.setPosition(0, 0)
    mySprite2.follow(mySprite, 20)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (nav == "left") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
    } else {
        if (nav == "right") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 4 . . . . . 
                . . . . 2 . . . . 4 4 . . . . . 
                . . . . 2 4 . . 4 5 4 . . . . . 
                . . . . . 2 4 d 5 5 4 . . . . . 
                . . . . . 2 5 5 5 5 4 . . . . . 
                . . . . . . 2 5 5 5 5 4 . . . . 
                . . . . . . 2 5 4 2 4 4 . . . . 
                . . . . . . 4 4 . . 2 4 4 . . . 
                . . . . . 4 4 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 100, 0)
        } else {
            if (nav == "down") {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 4 . . . . . 
                    . . . . 2 . . . . 4 4 . . . . . 
                    . . . . 2 4 . . 4 5 4 . . . . . 
                    . . . . . 2 4 d 5 5 4 . . . . . 
                    . . . . . 2 5 5 5 5 4 . . . . . 
                    . . . . . . 2 5 5 5 5 4 . . . . 
                    . . . . . . 2 5 4 2 4 4 . . . . 
                    . . . . . . 4 4 . . 2 4 4 . . . 
                    . . . . . 4 4 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 100)
            } else {
                if (nav == "up") {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . 4 . . . . . 
                        . . . . 2 . . . . 4 4 . . . . . 
                        . . . . 2 4 . . 4 5 4 . . . . . 
                        . . . . . 2 4 d 5 5 4 . . . . . 
                        . . . . . 2 5 5 5 5 4 . . . . . 
                        . . . . . . 2 5 5 5 5 4 . . . . 
                        . . . . . . 2 5 4 2 4 4 . . . . 
                        . . . . . . 4 4 . . 2 4 4 . . . 
                        . . . . . 4 4 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, mySprite, 0, -100)
                }
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    nav = "left"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    nav = "right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    nav = "down"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (nav == "left") {
        pause(100)
        mySprite3.x = mySprite3.x + -16
    } else {
        if (nav == "right") {
            pause(100)
            mySprite3.x = mySprite3.x + 16
        } else {
            if (nav == "down") {
                pause(100)
                mySprite3.y = mySprite3.y + 16
            } else {
                if (nav == "up") {
                    pause(100)
                    mySprite3.y = mySprite3.y + -16
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.value += 1
    projectile.destroy()
    if (statusbar.value == statusbar.max) {
        mySprite2.destroy(effects.rings, 500)
    }
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let nav = ""
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 90, 90)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite3 = sprites.create(img`
    . . . . . . . . b b b b b . . . 
    . . . . . . b b d d d d b b . . 
    . . . . . b d d d d d d d c . . 
    . . . . c d d d d d d d d c . . 
    . . . c b d d d d d d d b c c . 
    . . . c b b d d d d b c c c c . 
    . . c c d b b b c c c c c c c . 
    . . c c c d d d d c c d d d c c 
    . c d b c c b b c c d d d d d c 
    . c b d d b b b c c d d d d d c 
    . c c b b b b c b c b d d d b c 
    c b b c c c c c b b b b b c c c 
    c c b b c c c c c d d d d d b c 
    c c c c c c b b b b b c c c c c 
    c c c c c c c b b b b b c c c c 
    c c c c c c c c b b b b b c c c 
    `, SpriteKind.Food)
mySprite3.setPosition(100, 75)
music.ringTone(175)
music.rest(music.beat(BeatFraction.Breve))
music.playMelody("E D F D E D C D ", 250)
music.playMelody("E D F D E D C D ", 250)
music.playMelody("E D F D E D C D ", 250)
music.playMelody("E D F D E D C D ", 250)
music.playMelody("C D C F D E D C ", 250)
music.playMelody("C D C F D E D C ", 250)
music.setVolume(0)
