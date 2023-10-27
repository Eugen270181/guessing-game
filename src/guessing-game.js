class GuessingGame {
    constructor() {
        let min = 0;
        let max = 0;
        let middle = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.middle = Math.ceil((this.min+this.max)/2);    
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
