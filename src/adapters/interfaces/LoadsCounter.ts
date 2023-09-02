import { Counter } from './../../domains/Counter.ts';

export interface LoadsCounter {
  load(): Counter;
}
