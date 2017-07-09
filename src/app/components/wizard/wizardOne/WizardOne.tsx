import * as React from 'react';

import {WizardEngine, wizardDefinition} from "../engine/wizardEngine"
import {connect}  from 'react-redux';
import {SlideName} from "../../../models/screen/slide";
import {SectionName} from "../../../models/screen/section";
import {setScreen} from "../../../redux/modules/screen/screenReducer";
import {SectionStepper} from "../stepper/SectionStepper";
import {wizardOneDefinition} from "./WizardOneDefinition";
/**
 * Created by disme on 13/03/2017.
 */

@wizardDefinition(wizardOneDefinition)
@connect(
  (state: any) => {
    return {
      state: state.quickWizardState,
    }
  },
  (dispatch) => ({
    dispatch: dispatch,
    gotToSlide:(screen:{sectionName:SectionName,slideName:SlideName})=>{

      let action=setScreen(screen);

      dispatch(action)
    }
  })
)
export class WizardOne extends React.Component<any,any> {

  constructor(props){
    super(props)

  }


  render() {
    return (<WizardEngine{...this.props}></WizardEngine>)
  }
}


@connect(
  (state: any) => {
    return {
      state: state.quickWizardState,
    }
  }
)
@wizardDefinition(wizardOneDefinition)
export class WizardOneStepper extends React.Component<any,any> {

  constructor(props){
    super(props)

  }

  render() {
    return (<SectionStepper{...this.props}></SectionStepper>)
  }
}
