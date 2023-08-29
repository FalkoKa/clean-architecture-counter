import {AbstractUseCase} from "./AbstractUseCase.ts";
import {CounterStorage} from "../adapters/CounterStorage.ts";
import {Counter} from "../domains/Counter.ts";

export interface DisplayCounter {
    displayCounter(counter: Counter): void
}

export interface CounterAdapter {
    counterStorage: CounterStorage,
    counterPresenter: DisplayCounter
}


export class DecrementCounter extends AbstractUseCase<number, void> {
private _counterAdapter: CounterAdapter

    constructor(private _adapters: CounterAdapter) {
        super()
        this._counterAdapter = _adapters
    }

    async execute(input : number): Promise<void> {
        const counter = this._adapters.counterStorage.load()
        counter.subtractFromCounter(input)
        this._counterAdapter.counterStorage.store(counter)
        this._counterAdapter.counterPresenter.displayCounter(counter)
    }
}