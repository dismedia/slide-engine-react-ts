/**
 * Created by disme on 13/03/2017.
 */

import * as React from 'react';
import {OptionDef, PaperOptionSet} from "../../../../common/paper/PaperOptionSet";
import {NextButton} from "../../../../common/buttons/NextButton";


export class Slide2 extends React.Component<any,any> {


  constructor(props) {
    super(props);

  }

  render() {



    const {setWizardState, setNextScreen, state}= this.props

    const options:Array<OptionDef>=[
      {
        action:()=>{setWizardState("option1")},
        icon:"i3",
        label:"yes",
        active:state=="option2"
      },
      {
        action:()=>{setWizardState("option2")},
        icon:"i4",
        label:"no",
        active:state=="option2"
      }
    ];

    return (<div key="slide1">

      <PaperOptionSet options={options}/>
      <NextButton visible={this.props.state!=null} label="next" onClick={()=>{
        setNextScreen()
      }}/>

    </div>)
  }

}
