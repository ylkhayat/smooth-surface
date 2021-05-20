/*
 * combines all th existing reducers
 */
import * as boardingReducer from './boadingReducer';
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(
  loginReducer,
  loadingReducer,
  themeReducer,
  boardingReducer,
);
