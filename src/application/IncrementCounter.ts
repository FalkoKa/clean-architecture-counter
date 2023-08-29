import {AbstractUseCase} from "./AbstractUseCase.ts";
import {CounterAdapter} from "./DecrementCounter.ts";


export class IncrementCounter extends AbstractUseCase<number, void> {
    private _counterAdapter: CounterAdapter

    constructor(private _adapters: CounterAdapter) {
        super()
        this._counterAdapter = _adapters
    }

    async execute(input : number): Promise<void> {
        const counter = this._adapters.counterStorage.load()
        counter.addToCounter(input)
        this._counterAdapter.counterStorage.store(counter)
        this._counterAdapter.counterPresenter.displayCounter(counter)
    }
}