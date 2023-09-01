import {CounterPresenter} from "./CounterPresenter.ts";
import {Counter} from "../../domains/Counter.ts";

describe('CounterPresenter', () => {

    const counter = new Counter(1)
    const renderSpy = { renderCounter: jest.fn() }

    it('renders counter initiated with 1', () => {
        const sut = new CounterPresenter(renderSpy)
        sut.displayCounter(counter)

        expect(renderSpy.renderCounter).toHaveBeenCalledWith({
            counter: 1
        })
    });

})