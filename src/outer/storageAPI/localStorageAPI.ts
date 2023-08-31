import { StorageAPI } from '../../adapters/CounterStorage.ts';
import { Counter } from '../../domains/Counter.ts';

export class LocalStorageAPI implements StorageAPI {
  constructor(num: number) {
    const currentCounterInLocalStorage = localStorage.getItem('Counter');
    if (currentCounterInLocalStorage) {
      new Counter(Number(currentCounterInLocalStorage));
    } else {
      const counter = new Counter(num);
      this.safeToLocalStorage(counter);
    }
  }

  safeToLocalStorage(counter: Counter): void {
    localStorage.setItem('Counter', counter.counter.toString());
  }
  loadFromLocalStorage(): Counter {
    const counterAsString = localStorage.getItem('Counter');
    if (!counterAsString) {
      throw new Error('No value found in local storage');
    }
    return new Counter(Number(counterAsString));
  }
}
