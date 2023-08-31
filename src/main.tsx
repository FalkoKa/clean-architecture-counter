import React from 'react';
import {
  CounterPresenter,
  CounterViewModel,
} from './adapters/Presenter/CounterPresenter.ts';
import { Controller } from './adapters/Controller/Controller.ts';
import {
  CounterAdapter,
  DecrementCounter,
} from './application/DecrementCounter.ts';
import ReactCounter from './outer/react/ReactCounter.tsx';
import { CounterStorage } from './adapters/CounterStorage.ts';
import { Provider } from './outer/react/Context.ts';
import { IncrementCounter } from './application/IncrementCounter.ts';
import { LocalStorageAPI } from './outer/storageAPI/localStorageAPI.ts';

type State = {
  counterViewModel?: CounterViewModel;
};

type Props = {};

export type UseCases = {
  incrementCounter: IncrementCounter;
  decrementCounter: DecrementCounter;
};

export class Main extends React.PureComponent<Props, State> {
  private readonly _controller: Controller;
  private _adapters: CounterAdapter;
  private readonly _useCases: UseCases;

  constructor(props: Props) {
    super(props);
    this._adapters = {
      counterStorage: new CounterStorage(new LocalStorageAPI(0)),
      counterPresenter: new CounterPresenter(this),
    };
    this._useCases = {
      incrementCounter: new IncrementCounter({
        counterStorage: this._adapters.counterStorage,
        counterPresenter: this._adapters.counterPresenter,
      }),
      decrementCounter: new DecrementCounter({
        counterStorage: this._adapters.counterStorage,
        counterPresenter: this._adapters.counterPresenter,
      }),
    };
    this._controller = new Controller(this._useCases);
    this.state = {};
  }

  componentDidMount() {
    this.setCounterViewModel(this._adapters.counterStorage.load()); // ???
  }

  private setCounterViewModel(counterViewModel: CounterViewModel): void {
    this.setState({
      counterViewModel,
    });
  }

  public renderCounter(counterViewModel: CounterViewModel) {
    this.setState({ counterViewModel });
  }

  render(): React.ReactElement {
    const { counterViewModel } = this.state;
    return (
      <>
        <Provider value={{ controller: this._controller }}>
          {counterViewModel && (
            <ReactCounter counterViewModel={counterViewModel} />
          )}
        </Provider>
      </>
    );
  }
}
