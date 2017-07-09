import * as React from 'react';
import {SlideDefinition} from "../engine/wizardEngine";

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

export class SectionStepper extends React.Component<any,any> {
  private definition: Array<SlideDefinition<any>>;

  constructor(props) {
    super(props);

    this.state = {};
    this.definition = this.props.definition;

  }

  renderStep(definition, state, currentSlide) {
    return (<Step key={definition.slideName} completed={definition.mapState(state)!=null}
                  active={(definition.slideName==currentSlide)}>
      <StepLabel style={{fontSize:"6px"}}>{definition.slideName}</StepLabel>
    </Step>)

  }

  render() {

    let {currentSlide, state} = this.props;

    return ( <div style={{position: "absolute",bottom: "200px"}}>
      <Stepper linear={false}>
        {this.props.definition.filter(e => e.includeInPaths(state)).map((definition) => this.renderStep(definition, state, currentSlide))}
      </Stepper>

    </div>)

  }

}
