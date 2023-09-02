import { CounterViewModel } from '../Presenter/CounterPresenter';

export interface RendersCounter {
  renderCounter(counterViewModel: CounterViewModel): void;
}
