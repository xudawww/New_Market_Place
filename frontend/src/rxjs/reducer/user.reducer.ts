import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.action';
import UserState, { initializeState } from '../state/user.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(UserActions.GetUserAction, (state) => state),

  on(UserActions.SetUserAction, (state: UserState, { payload }) => {
    return { ...state, User: payload };
  }),

  on(UserActions.ErrorUserAction, (state: UserState, error: Error) => {
    console.log(error);
    return { ...state, UserError: error };
  })
);

export function UserReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
