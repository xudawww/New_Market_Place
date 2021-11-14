import { createAction, props } from '@ngrx/store';
import User from '../model/user.model';
//Starter
export const GetUserAction = createAction('[User] - Get User');

export const CreateUserAction = createAction(
  '[User] - Cretaer User',
  props<{ payload: User }>()
);

export const SetUserAction = createAction(
  '[User] - Success Get User',
  props<{ payload: User }>()
);

export const ErrorUserAction = createAction('[User] - Error', props<Error>());
