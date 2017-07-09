import * as React from 'react';

export const SvgCircleButtonType = {

  i1: "/images/svg/1.svg",
  i2: "/images/svg/2.svg",
  i3: "/images/svg/3.svg",
  i4: "/images/svg/4.svg",
  i5: "/images/svg/5.svg",


}

export class SvgCircleButton extends React.Component<{icon: string, action: () => any},any> {

  constructor(props) {
    super(props);

    this.state = {}

  }

  componentDidMount() {

  }

  render() {

    return (
      <img className="svgCircleButton" src={SvgCircleButtonType[this.props.icon]} onClick={()=>{this.props.action()}}/>
    )

  }

}
