import { Counter } from './../../domains/Counter.ts';

export interface StoreCounter {
  store(counter: Counter): void;
}
