import * as React from 'react';

import {browserHistory, Router, Route} from 'react-router'

import {SectionNameNameDictionary} from "../../models/screen/section";

import {SectionTemplate} from "./templates/SectionHtmlTemplate";

import './../../../styles/application/application.scss'
import {VelocityTransitionGroup} from "velocity-react";
import {SlideTemplate} from "./templates/SlideHtmlTemplate";
import {WizardOne} from "./wizardOne/WizardOne";

export class SectionWrapper extends React.Component<any,any> {

  sections: any;

  constructor(props) {
    super(props);

    this.state = {}

    this.sections = {

      [SectionNameNameDictionary.wizardOne]: <WizardOne></WizardOne>

    }

  }


  componentDidMount() {

  }

  goToScreen(screen) {


    this.props.router.push("/wizard/" + screen.sectionName + "/" + screen.slideName)

  }

  render() {

    const section = this.props.params.section;
    const slide = this.props.params.slide;

    const sectionProps = {
      goToScreen: (screen) => {
        this.goToScreen(screen)
      },
      currentScreen: {
        sectionName: section,
        slideName: slide
      }
    };



    return (
      <SectionTemplate currentSection={section} currentSlide={slide}>
        <VelocityTransitionGroup enter={{animation: "slideDown",duration:500}} leave={{animation: "slideUp",duration:500}}>
          <SlideTemplate key={section+slide}>

            {React.cloneElement(this.sections[section], sectionProps)}


          </SlideTemplate>
        </VelocityTransitionGroup>
      </SectionTemplate>)

  }

}


