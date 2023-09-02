import { Controller } from '../../adapters/Controller/Controller';
import React from 'react';

export type ContextType = {
  controller: Controller | null;
};
export const Context = React.createContext<ContextType | null>(null);

export const Provider = Context.Provider;
