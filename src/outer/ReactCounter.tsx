import {CounterViewModel} from "../adapters/Presenter/CounterPresenter.ts";
import {useContext} from "react";
import {Context} from "./Context.ts";
import {Button} from "./Button.tsx";

export type Props = {
    counterViewModel: CounterViewModel
}

export default function ReactCounter({counterViewModel}: Props) {
    const {counter} = counterViewModel
    const context = useContext(Context)


    return (
        <div className="wrapper" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div>Counter: {counter}</div>
            <div className="buttons">
                <Button onClick={() => context?.controller?.executeIncrementCounter()}>Add</Button>
                <Button onClick={() => context?.controller?.executeDecrementCounter()}>Subtract</Button>
            </div>
        </div>
    )
}