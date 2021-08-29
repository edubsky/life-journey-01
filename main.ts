scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    mySprite.setImage(assets.image`boy`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    mySprite.setImage(assets.image`man`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    dying = true
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (dead) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else {
        mySprite.x += 1
        if (dying) {
            myCounter.count += -1
        } else {
            myCounter.count += 1
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    mySprite.setImage(assets.image`oldestman`)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.y += 1
    if (dying) {
        myCounter.count += -100
    } else {
        myCounter.count += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    mySprite.setImage(assets.image`oldman`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite2.say("good luck son", 500)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (dead) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else {
        mySprite.x += -1
        if (dying) {
            myCounter.count += -1
        } else {
            myCounter.count += 1
        }
    }
})
let dead = false
let dying = false
let myCounter: DigitCounter = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite2 = sprites.create(assets.image`woman`, SpriteKind.Player)
mySprite2.x = 60
mySprite = sprites.create(assets.image`baby`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
myCounter = sevenseg.createCounter(SegmentStyle.Narrow, SegmentScale.Half, 4)
myCounter.y = 10
myCounter.setDigitColor(15)
color.startFade(color.Sweet, color.originalPalette, 5000)
game.onUpdate(function () {
    myCounter.x = scene.cameraProperty(CameraProperty.X)
    myCounter.y = scene.cameraProperty(CameraProperty.Y) - 50
})
game.onUpdateInterval(1000, function () {
    if (dying && myCounter.count == 0) {
        mySprite.setImage(assets.image`gravestone`)
        dead = true
        color.startFade(color.originalPalette, color.Sweet, 5000)
    }
})
