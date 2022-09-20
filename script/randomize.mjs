export default class Randomize {
    // Genera dei valori (numbers) casuali entro un valore massimo ed uno minimo ad ogni intervallo di tempo
    static randomNumInRange(minValue, maxValue) {
        let k = Math.random(); // Coefficiente da 0 a 1
        let range = (maxValue - minValue); // Calcolo del range
        return Math.round(minValue + range * k)  // ritorna il k% del range 
    }
    // Chiama una funzione ogni intervallo di tempo
    static callFuncAtInterval(callback, minInterval, maxInterval) {
        let k = Math.random(); // Coefficiente da 0 a 1
        let range = (maxInterval - minInterval); 
        let interval = minInterval + range * k; // Intervallo casuale tra max e min
        return setInterval(callback, interval);
    }

}