/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState: any = {};

export const boardingReducer = createReducer(initialState, {
  [types.ON_BOARDING_NAME](state: any, action) {
    return {...state, name: action.payload};
  },
  [types.ON_BOARDING_BIRTH_DATE](state: any, action) {
    return {...state, birthdate: action.payload};
  },
});
