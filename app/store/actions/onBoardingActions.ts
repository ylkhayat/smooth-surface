import * as types from './types';

export function onChangeName(newName: string) {
  return {
    type: types.ON_BOARDING_NAME,
    payload: newName,
  };
}
