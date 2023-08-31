import { Counter } from '../domains/Counter.ts';
export interface StoreCounter {
  store(counter: Counter): void;
}
export interface LoadsCounter {
  load(): Counter;
}

export interface StorageAPI {
  safeToLocalStorage(counter: Counter): void;
  loadFromLocalStorage(): Counter;
}

export class CounterStorage implements StoreCounter, LoadsCounter {
  _storage: StorageAPI;
  constructor(storage: StorageAPI) {
    this._storage = storage;
  }

  store(counter: Counter): void {
    this._storage.safeToLocalStorage(counter);
  }
  load(): Counter {
    return this._storage.loadFromLocalStorage();
  }
}
