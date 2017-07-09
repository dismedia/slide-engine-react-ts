
import {IWizardOne, IWizardOneAction, IQuickWizardSetPropertyAction} from "../../../models/quickWizard/wizardOne";
/**
 * Created by disme on 13/03/2017.
 */


export const SETVALUE: string = 'Wizard/setValue';



const initWizardState:()=>IWizardOne=()=>({

 slide1Value:null,
 slide2Value:null,
 slide3Value:null,


});



export function quickWizardReducer(state: IWizardOne, action?: IWizardOneAction): IWizardOne {

  if (!state) {
    state = initWizardState()

  }

  switch (action.type) {
    case SETVALUE:

      Object.keys(action.value).forEach((key)=>{
        if(!state.hasOwnProperty(key)){
          console.warn("you trynig to set property "+key+" which not exist in state: "+state);
        }
      });

      return Object.assign({}, state,<IQuickWizardSetPropertyAction>action.value);

    default:
      return state;
  }
}



export function WizardOneValue(value:Partial<IWizardOne>):IQuickWizardSetPropertyAction{
  return {
    type:SETVALUE,
    value:value
  }

}
