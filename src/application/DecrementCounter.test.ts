import {DecrementCounter} from "./DecrementCounter.ts";
import {CounterPresenter} from "../adapters/Presenter/CounterPresenter.ts";
import {CounterStorage} from "../adapters/CounterStorage.ts";
import {LocalStorageMock} from "../outer/storageAPI/localStorageAPI.mock.ts";

describe('Increment Counter', () => {


    const renderSpy = {renderCounter: jest.fn()}
    const presenter = new CounterPresenter(renderSpy)
    const localStorageMock = new LocalStorageMock()


    it("can be executed and decrements counter by 1", () => {

        const adapters = {
            counterStorage: new CounterStorage(localStorageMock),
            counterPresenter: presenter
        }

        const useCase = new DecrementCounter(adapters)
        useCase.execute(1)

        const expectedRenderForDecrementCounter = {"_counter": -1}


        expect(localStorageMock.loadFromLocalStorage()).toEqual(expectedRenderForDecrementCounter)
    })
})