import {SlideDefinition} from "../engine/wizardEngine";

import * as React from 'react';
import {Slide1} from "./slides/purchase/Slide1";


import {WizardOneSlideNameDictionary, QuickWizardSlideName} from "../../../models/screen/slide";
import {SectionNameNameDictionary} from "../../../models/screen/section";

import {Slide2} from "./slides/purchase/Slide2";
import {WizardOneValue} from "../../../redux/modules/wizardOne/wizardOne";


/**
 * Created by disme on 13/03/2017.
 */

export interface QuickWizardSlideDefinition extends SlideDefinition<QuickWizardSlideName> {
}

const paths = {
  allways: (state) => true,

};

export const wizardOneDefinition: Array<QuickWizardSlideDefinition> =
  [
    {
      slideName: WizardOneSlideNameDictionary.slide1,
      component: Slide1,
      mapState: (state) => state.slide1Value,
      createAction: (value) => {
        return WizardOneValue({slide1Value: value});
      },

      next: (state) => {

        return {
          slideName: WizardOneSlideNameDictionary.slide2,
          sectionName: SectionNameNameDictionary.wizardOne
        }

      },
      includeInPaths: paths.allways
    },
    {
      slideName: WizardOneSlideNameDictionary.slide2,
      component: Slide2,
      mapState: (state) => state.slide2Value,
      createAction: (value) => {
        return WizardOneValue({slide2Value: value});
      },

      next: (state) => {

        return {
          slideName: WizardOneSlideNameDictionary.slide1,
          sectionName: SectionNameNameDictionary.wizardOne
        }

      },
      includeInPaths: paths.allways
    },


  ];



