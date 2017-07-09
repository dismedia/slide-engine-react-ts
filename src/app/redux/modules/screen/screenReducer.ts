import {IScreen, IScreenAction} from "../../../models/screen/Screen";
import {SectionNameNameDictionary, SectionName} from "../../../models/screen/section";
import {WizardOneSlideNameDictionary, SlideName} from "../../../models/screen/slide";
/**
 * Created by disme on 10/04/17.
 */



const initScreenState=()=>({

  sectionName:SectionNameNameDictionary.wizardOne,
  slideName:WizardOneSlideNameDictionary.slide1

});

export const SET_SCREEN: string = 'screen/setScreen';


export function screenReducer(state: IScreen, action?: IScreenAction): IScreen {

  if (!state) {
    state = initScreenState()

  }

  switch (action.type) {
    case SET_SCREEN:



      if(!action.sectionName){
        return Object.assign({}, state,{slideName:action.slideName});
      }else{
        return Object.assign({}, state,{sectionName:action.sectionName},{slideName:action.slideName});
      }


    default:
      return state;
  }
}



export function setScreen(screen:{sectionName:SectionName, slideName:SlideName}):IScreenAction{

  return {
    type: SET_SCREEN,
    sectionName: screen.sectionName,
    slideName: screen.slideName
  };

}
