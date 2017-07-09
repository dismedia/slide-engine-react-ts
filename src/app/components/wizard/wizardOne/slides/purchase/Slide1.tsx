/**
 * Created by disme on 13/03/2017.
 */

import * as React from 'react';
import {OptionDef, PaperOptionSet} from "../../../../common/paper/PaperOptionSet";
import {NextButton} from "../../../../common/buttons/NextButton";


export class Slide1 extends React.Component<any,any> {


  constructor(props) {
    super(props);

  }

  render() {



    const {setWizardState, setNextScreen, state}= this.props

    const options:Array<OptionDef>=[
      {
        action:()=>{setWizardState("option1")},
        icon:"i1",
        label:"yes",
        active:state=="option1"
      },
      {
        action:()=>{setWizardState("option2")},
        icon:"i2",
        label:"no",
        active:state=="option1"
      }
    ];

    return (<div key="slide1">

      <PaperOptionSet options={options}/>
      <NextButton visible={this.props.state!=null} label="next" onClick={()=>{setNextScreen()}}/>

    </div>)
  }

}
