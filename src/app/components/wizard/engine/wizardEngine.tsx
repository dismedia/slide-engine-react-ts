import * as React from 'react';
import {connect}  from 'react-redux';
import {QuickWizardSecitonName} from "../../../models/screen/section";


export class WizardEngine extends React.Component<any,any> {

  private definition: Array<SlideDefinition<any>>;

  constructor(props) {

    super(props);
    const {state}=this.props;

    this.definition = props.definition;
    this.state = {
      currentScreen: this.props.currentScreen
    }

  }

  getCurrentDefinition(): SlideDefinition<any> {



    return this.definition.filter((e) => e.slideName == this.props.currentScreen.slideName)[0];

  }

  render() {

    const {state, dispatch, goToScreen}=this.props;
    const currentDefinition = this.getCurrentDefinition();



    let {slideName, mapState, component, createAction, next}=currentDefinition;

    let CurrentSlide = currentDefinition.component;

    return (
      <CurrentSlide
        key={slideName}
        state={mapState(state)}
        setWizardState={(value) => {
               dispatch(createAction(value))
            }}
        setNextScreen={() => {

              goToScreen(next(state));

            }}

      ></CurrentSlide>
    )
  }

}

export interface SlideDefinition<WizardSlideName> {

  mapState: (state) => any
  slideName: WizardSlideName,
  component: any,
  createAction: (any) => void,
  next: (state) => {slideName: WizardSlideName, sectionName?: QuickWizardSecitonName}
  includeInPaths:(state)=>boolean;

}

export const wizardDefinition = def => ComposedComponent => class extends React.Component<any,any> {

  render() {
    return <ComposedComponent {...this.props} definition={def}/>;
  }
};


