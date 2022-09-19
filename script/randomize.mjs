export default class randomize {
    // Genera dei valori (numbers) casuali entro un valore massimo ed uno minimo ad ogni intervallo di tempo
    static randomNumInRange(minValue, maxValue) {
        let k = Math.random(); // Coefficiente da 0 a 100
        let range = (maxValue - minValue); // Calcolo del range
        return range * k  // ritorna il k% del range 
    }
    // Chiama una funzione ogni intervallo di tempo
    static callFuncAtInterval(callback, interval) {
        return setInterval(callback, interval);
    }

}