import {Controller} from "./Controller.ts";

describe('Controller', () => {
    const incrementCounterUseCaseExecuteSpyFn = jest.fn()
    const decrementCounterUseCaseExecuteSpyFn = jest.fn()

    const useCases = {
        incrementCounter: {execute: incrementCounterUseCaseExecuteSpyFn},
        decrementCounter: {execute: decrementCounterUseCaseExecuteSpyFn}
    } as never

    it('calls incrementCounter use case', () => {
        const sut = new Controller(useCases)
        sut.executeIncrementCounter()

        expect(incrementCounterUseCaseExecuteSpyFn).toHaveBeenCalled()
    })

    it('calls decrementCounter use case', () => {
        const sut = new Controller(useCases)
        sut.executeDecrementCounter()

        expect(decrementCounterUseCaseExecuteSpyFn).toHaveBeenCalled()
    })
})