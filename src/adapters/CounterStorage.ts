import { Counter } from '../domains/Counter';
import { StoreCounter } from './interfaces/StoreCounter';
import { LoadsCounter } from './interfaces/LoadsCounter';
import { StorageAPI } from './interfaces/StorageAPI';

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
