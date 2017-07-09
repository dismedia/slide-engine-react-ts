import * as React from 'react';
import {SectionLabel} from "../../../models/screen/section";
import {SlideLabel} from "../../../models/screen/slide";


export class SectionTemplate extends React.Component<any,any> {

  render() {
    return (
      <div className="application-wizard">
        <header className="application-wizard-header">
          <div className="current-section">{SectionLabel[this.props.currentSection]}</div>
          <div className="current-slide">{SlideLabel[this.props.currentSlide]}</div>

        </header>
        <div className="slide">
          {this.props.children}
        </div>
        <footer className="application-wizard-footer">
          <div className="inner contained">
            <div className="application-wizard-menu"></div>
            <div className="current-section application-wizard-footer__section">{this.props.currentSection}</div>


          </div>



        </footer>
      </div>
    )
  }
}
