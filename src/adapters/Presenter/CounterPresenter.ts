import {DisplayCounter} from "../../application/DecrementCounter.ts";
import {Counter} from "../../domains/Counter.ts";

export type CounterViewModel = {
    counter: number
}

export interface RendersCounter {
    renderCounter(counterViewModel: CounterViewModel): void
}

export class CounterPresenter implements DisplayCounter {
    private _state: CounterViewModel | null

    constructor(private readonly _renderer: RendersCounter
    ) {
        this._state = null
    }

    displayCounter(counter: Counter): void {
        this._state = {
            counter: counter.counter
        }
        this._renderer.renderCounter(this._state)
    }
}