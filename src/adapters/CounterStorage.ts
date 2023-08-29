import {Counter} from "../domains/Counter.ts";
export interface StoreCounter {
    store(counter: Counter): void
}
export interface LoadsCounter {
    load(): Counter
}

// interface _api -> loadFromLocalStorage, storeInLocalStorage

export class CounterStorage implements StoreCounter, LoadsCounter {
    private _counter: Counter
    constructor(num: number) {
        this._counter = new Counter(num)
    }

    store(counter: Counter): void {
        this._counter = counter

    }
    load(): Counter {
        return this._counter
    }
}