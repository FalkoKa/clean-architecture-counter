import { AbstractUseCase } from './AbstractUseCase.ts';

export type UseCases = {
  IncrementCounter: AbstractUseCase<number, void>;
  DecrementCounter: AbstractUseCase<number, void>;
};
