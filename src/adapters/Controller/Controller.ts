import {UseCases} from "./../../main.tsx";

export class Controller {
    constructor( private readonly _useCases: UseCases) {
    }

    public executeIncrementCounter() {
        return this._useCases.incrementCounter.execute(1)
    }

    public executeDecrementCounter() {
        return this._useCases.decrementCounter.execute(1)
    }
}