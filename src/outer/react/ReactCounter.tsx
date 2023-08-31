import { CounterViewModel } from './../../adapters/Presenter/CounterPresenter.ts';
import { useContext } from 'react';
import { Context } from './Context.ts';
import { Button } from './Button.tsx';
import styled from 'styled-components';

export type Props = {
  counterViewModel: CounterViewModel;
};

export default function ReactCounter({ counterViewModel }: Props) {
  const { counter } = counterViewModel;
  const context = useContext(Context);

  return (
    <Wrapper>
      <div>Counter: {counter}</div>
      <ButtonWrapper>
        <Button onClick={() => context?.controller?.executeIncrementCounter()}>
          Add
        </Button>
        <Button onClick={() => context?.controller?.executeDecrementCounter()}>
          Subtract
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const ButtonWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  gap: 50px;
  @media only screen and (max-width: 430px) {
    gap: 10px;
    flex-direction: column;
    width: 100%;
  }
`;

// styled components
// local storage
// interfaces auslagern
// readme

// tests
