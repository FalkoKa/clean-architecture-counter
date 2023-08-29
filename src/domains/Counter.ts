export class Counter {
    private _counter: number

    constructor(counter: number) {
        this._counter = counter
    }

    addToCounter(num: number) {
        this._counter += num
    }

    subtractFromCounter(num: number) {
        this._counter -= num
    }

    get counter() {
        return this._counter
    }
}