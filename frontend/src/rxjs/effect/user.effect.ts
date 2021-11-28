import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService  } from '../service/user.service';
import * as UserActions from '../action/user.action';
import { EMPTY } from 'rxjs';
@Injectable()
export class Usereffects {
  register$: any = createEffect((): any => 
  this.actions$.pipe(
    ofType(UserActions.CreateUserAction),
    mergeMap((action) => this.userService.getAll(action.payload)
      .pipe(
        map(user => ({ type: '[User] - Success Get User', payload: user})),
        catchError((err) => EMPTY)
      ))
   )
);

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}