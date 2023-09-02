import { Counter } from '../../domains/Counter';

export interface DisplayCounter {
  displayCounter(counter: Counter): void;
}
