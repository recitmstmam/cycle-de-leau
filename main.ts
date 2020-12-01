let sol = 0
let H_sol = 0
input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    true,
    false
    )
    basic.pause(200)
    basic.showString("Air" + dht11_dht22.readData(dataType.humidity) + "%")
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P7, 1)
    basic.pause(200)
    sol = pins.analogReadPin(AnalogPin.P2)
    H_sol = Math.trunc((sol - 310) * 100 / (1023 - 310))
    pins.digitalWritePin(DigitalPin.P7, 0)
    serial.writeValue("sol", H_sol)
    basic.showString("H sol" + H_sol + "%")
    basic.pause(1000)
})
