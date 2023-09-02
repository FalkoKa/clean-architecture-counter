import { Counter } from '../../domains/Counter';

export interface StorageAPI {
  safeToLocalStorage(counter: Counter): void;
  loadFromLocalStorage(): Counter;
}
