// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps){
    let max = temps[0];
    let min = temps[0];

    for(let i=0;i<temps.length;i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(temps[i] > max) max = curTemp;
        if(temps[i] < min) min = curTemp;
    }

    //console.log(max, min);
    return max-min;
};

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);


// Problem - 2 :

const calcTempAmplitudeNew = function (t1, t2){
    const temps = t1.concat(t2);

    let max = temps[0];
    let min = temps[0];

    for(let i=0;i<temps.length;i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(temps[i] > max) max = curTemp;
        if(temps[i] < min) min = curTemp;
    }

    //console.log(max, min);
    return max-min;
};

const amplitudeNew = calcTempAmplitude([3,1,2], [5,3,8]);

console.log(amplitudeNew);*/

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('degrees celcius'))
    };
    console.table(measurement);

    const kelvin = measureKelvin.value +273;
    return kelvin;
}

console.log(measureKelvin());
