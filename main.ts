radio.onReceivedNumber(function (receivedNumber) {
    select2 = true
    hand2 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    hand1 = randint(1, 3)
    if (hand1 == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand1 == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    select1 = true
    radio.sendNumber(hand1)
})
let hand2 = 0
let hand1 = 0
let select2 = false
let select1 = false
radio.setGroup(1)
select1 = false
select2 = false
hand1 = 0
basic.forever(function () {
    if (select1 == true && select2 == true) {
        select1 = false
        select2 = false
        if (hand1 == hand2) {
            basic.showIcon(IconNames.Asleep)
        } else {
            if (hand1 == 1 && hand2 == 2) {
                basic.showIcon(IconNames.Happy)
            } else if (hand1 == 1 && hand2 == 3) {
                basic.showIcon(IconNames.Sad)
            } else if (hand1 == 2 && hand2 == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (hand1 == 2 && hand2 == 3) {
                basic.showIcon(IconNames.Happy)
            } else if (hand1 == 3 && hand2 == 1) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
    hand1 = false
    hand2 = false
})
