/* import { createReducer, on,  createSelector } from '@ngrx/store';
import * as actions  from './counter.actions';

export interface AppState {
  counter: number;
}

export const initialState = { counter: 0 };

export const counterReducer = createReducer<AppState>(
  initialState,
  on(actions.increment, (state): AppState => ({
    ...state,
    counter: state.counter + 1
  })),
  on(actions.decrement, (state): AppState => ({
    ...state,
    counter: state.counter - 1
  })),
  on(actions.reset, (state): AppState => ({
    ...state,
    counter: 0
  })),
); */

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);