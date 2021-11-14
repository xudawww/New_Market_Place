import User from '../model/user.model';

export default class UserState {
  User: User;
  UserErr: Error;
  Loading: Boolean;
}

export const initializeState = (): UserState => {
  return { User: null, UserErr: null, Loading: false };
};
