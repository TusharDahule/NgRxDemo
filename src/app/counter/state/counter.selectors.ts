import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const COUNTER_STATE_KEY = 'counter';

const counterFeatureSelector = createFeatureSelector<CounterState>(COUNTER_STATE_KEY);

export const counterSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.counter;
  }
);
export const channelNameSelector = createSelector(
  counterFeatureSelector,
  (state) => {
    return state.channelName;
  }
);
