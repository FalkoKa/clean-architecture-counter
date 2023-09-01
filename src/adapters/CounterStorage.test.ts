import {LocalStorageMock} from "../outer/storageAPI/localStorageAPI.mock.ts";
import {CounterStorage} from "./CounterStorage.ts";
import {Counter} from "../domains/Counter.ts";

describe('CounterStorageGateway', () => {

    const storageMock = new LocalStorageMock()
    const counter = new Counter(0)

    it('can store a counter', () => {
        const sut = new CounterStorage(storageMock)
        expect(() => sut.store(counter)).not.toThrow()
    });

    it('can load a counter', () => {
        const sut = new CounterStorage(storageMock)
        expect(() => sut.load()).not.toThrow()
    });
})