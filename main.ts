let random = 0
basic.forever(function () {
    random = randint(5, 10)
    basic.showNumber(random)
    for (let Contador = 0; Contador <= random; Contador++) {
        basic.showNumber(Contador)
        for (let index = 0; index < Contador; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(10)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("C5 E A B F G D C ", 120)
})
