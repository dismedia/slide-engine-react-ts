import * as React from 'react';
import RaisedButton from "material-ui/RaisedButton";
import {VelocityComponent} from "velocity-react";

export class NextButton extends React.Component<{label:string,onClick:()=>void,visible:boolean},any> {

    constructor(props) {
        super(props);

    }


    render() {

      return (
      <VelocityComponent animation={{ opacity: this.props.visible==true ? 1 : 0 }} duration={500}>
         <div className="nextButton"><RaisedButton  label={this.props.label} onTouchTap={()=>this.props.onClick()} secondary={true} /></div>
      </VelocityComponent>)



    }

}
