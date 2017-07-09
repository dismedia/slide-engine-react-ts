/**
 * Created by disme on 02/03/2017.
 */

import {combineReducers, Reducer} from 'redux';
import {reducer as ReduxAsyncConnect} from 'redux-connect';
import { routerReducer } from 'react-router-redux';




import {screenReducer} from "./modules/screen/screenReducer";
import {quickWizardReducer} from "./modules/wizardOne/wizardOne";





export const rootReducer: Reducer<any> = combineReducers<any>({

  routing: routerReducer,

  reduxAsyncConnect: ReduxAsyncConnect,
  quickWizardState:quickWizardReducer,
  screenState:screenReducer,
});

export default rootReducer;
