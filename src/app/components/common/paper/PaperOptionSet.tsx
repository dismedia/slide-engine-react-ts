import * as React from 'react';
import {SvgCircleButton} from "../buttons/SvgCircleButton";
import {VelocityTransitionGroup} from "velocity-react";

import FlatButton from "material-ui/FlatButton";

export interface OptionDef {
  icon: string,
  action: () => void,
  label: string
  active?: boolean
}

export class PaperOptionSet extends React.Component<{options: Array<OptionDef>},any> {

  constructor(props) {
    super(props);

    this.state = {d: false}

    // setTimeout(()=>{
    //   this.setState({d:true})
    // },2000)

  }

  componentDidMount() {

  }

  render() {

    const optionsHtml = this.props.options.map((option, i) => {

      let imageClasses = "image " + (option.active ? "active" : "");

      return (
        <div key={i} className="iconWrapper">

          <FlatButton style={{height:"7em"}}>
            <div className={imageClasses}>
              <SvgCircleButton icon={option.icon} action={option.action}/>
            </div>
          </FlatButton>



          <span className="label">{option.label}</span>
        </div>)

    });

    let addStyle = ""
    if (this.state.d) {
      addStyle = " active"
    }

    return (


        <div className="paperCard">
          {optionsHtml}
        </div>


    )

  }

}
