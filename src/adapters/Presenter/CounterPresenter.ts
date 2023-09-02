import { DisplayCounter } from '../../application/interfaces/DisplayCounter.ts';
import { Counter } from '../../domains/Counter.ts';
import { RendersCounter } from '../interfaces/RendersCounter.ts';

export type CounterViewModel = {
  counter: number;
};

export class CounterPresenter implements DisplayCounter {
  private _state: CounterViewModel | null;

  constructor(private readonly _renderer: RendersCounter) {
    this._state = null;
  }

  displayCounter(counter: Counter): void {
    this._state = {
      counter: counter.counter,
    };
    this._renderer.renderCounter(this._state);
  }
}
