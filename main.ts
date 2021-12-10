input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 C5 C5 B B B A A ", 120)
    music.playMelody("A G G G F F F E ", 120)
    music.playMelody("E E D D D C C C ", 120)
})
input.onButtonPressed(Button.AB, function () {
    music.stopMelody(MelodyStopOptions.All)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showLeds(`
        # # # . #
        . . # . #
        # # . # #
        # . # . .
        # . # # #
        `)
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
