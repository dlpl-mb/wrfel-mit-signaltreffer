input.onGesture(Gesture.Shake, function () {
    meine_zahl = randint(1, 6)
    basic.showNumber(meine_zahl)
    if (meine_zahl == 6) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
let meine_zahl = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
