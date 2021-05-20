import * as types from './types';

export function doChangeName(newName: string) {
  return {
    type: types.ON_BOARDING_NAME,
    payload: newName,
  };
}

export function doChangeBirthdate(newDate: any) {
  return {
    type: types.ON_BOARDING_BIRTH_DATE,
    payload: newDate,
  };
}
