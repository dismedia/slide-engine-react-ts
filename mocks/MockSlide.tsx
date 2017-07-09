/**
 * Created by Marcin on 09/07/17.
 */
import * as React from 'react';

export class MockSlideA extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <span id="title">slide A</span>
        <span id="value">{this.props.state}</span>

        <button id="next" onClick={()=>this.props.setNextScreen()}></button>

        <button id="setOption1" onClick={()=>this.props.setWizardState("1") } />
        <button id="setOption2" onClick={()=>this.props.setWizardState("2") } />

      </div>
    )


  }

}

export class MockSlideB extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <span id="title">slide B</span>
      </div>
    )


  }

}
