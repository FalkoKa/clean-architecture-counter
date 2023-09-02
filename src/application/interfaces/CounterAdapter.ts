import { CounterStorage } from '../../adapters/CounterStorage';
import { DisplayCounter } from '../DecrementCounter';

export interface CounterAdapter {
  counterStorage: CounterStorage;
  counterPresenter: DisplayCounter;
}
