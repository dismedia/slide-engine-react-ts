import * as React from 'react';

export class SlideTemplate extends React.Component<any,any> {


  //TODO: check this style
  render() {
    return (


      <div className="application-wizard-content">

        {this.props.children}
      </div>
  )
  }
}
