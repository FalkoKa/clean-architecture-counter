import {Counter} from "../../domains/Counter.ts";

export class LocalStorageMock {
    _counter = new Counter(0)
    loadFromLocalStorage(): Counter {
        return new Counter(this._counter.counter)
    }

    safeToLocalStorage(counter: Counter): void {
        this._counter = counter
    }
}