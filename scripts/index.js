function convertTemperature(){
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');

    if(celsiusInput.value !== '') {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = celsiusValue * 1.8 + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== '') {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue -32) / 1.8;

        celsiusInput.value = celsiusValue.toFixed(2);
    }
}

function convertTime(){
    const hourInput = document.getElementById('hour');
    const minuteInput = document.getElementById('minute');

    if(hourInput.value !== '') {
        const hourValue = parseFloat(hourInput.value);
        const minuteValue = hourValue * 60;

        minuteInput.value = minuteValue;
    } else if (minuteInput.value !== '') {
        const minuteValue = parseFloat(minuteInput.value);
        const hourValue = (minuteValue * 1) / 60;

        hourInput.value = hourValue;
    }
}

function convertMeters(){
    const metersInput = document.getElementById('meters');
    const centimetersInput = document.getElementById('centimeters');

    if(metersInput.value !== '') {
        const metersValue = parseFloat(metersInput.value);
        const centimetersValue = metersValue * 100;

        centimetersInput.value = centimetersValue;
    } else if (centimetersInput.value !== '') {
        const centimetersValue = parseFloat(centimetersInput.value);
        const metersValue = (centimetersValue * 1) / 100;

        metersInput.value = metersValue;
    }
}

function convertMoeda(){
    const dolarInput = document.getElementById('dolar');
    const realInput = document.getElementById('real');

    if(dolarInput.value !== '') {
        const dolarValue = parseFloat(dolarInput.value);
        const realValue = dolarValue * 5.14;

        realInput.value = realValue.toFixed(2);
    } else if (realInput.value !== '') {
        const realrValue = parseFloat(realInput.value);
        const dolarValue = (realValue * 1) / 5.14;

        dolarInput.value = dolarValue.toFixed(2);
    }
}