import {IncrementCounter} from "./IncrementCounter.ts";
import {CounterPresenter} from "../adapters/Presenter/CounterPresenter.ts";
import {CounterStorage} from "../adapters/CounterStorage.ts";
import {LocalStorageMock} from "../outer/storageAPI/localStorageAPI.mock.ts";

describe('Increment Counter', () => {


    const renderSpy = {renderCounter: jest.fn()}
    const presenter = new CounterPresenter(renderSpy)
    const localStorageMock = new LocalStorageMock()


    it("can be executed and increments counter by 1", () => {

        const adapters = {
            counterStorage: new CounterStorage(localStorageMock),
            counterPresenter: presenter
        }

        const useCase = new IncrementCounter(adapters)
        useCase.execute(1)

        const expectedRenderForIncrementCounter = {"_counter": 1}


        expect(localStorageMock.loadFromLocalStorage()).toEqual(expectedRenderForIncrementCounter)
    })
})