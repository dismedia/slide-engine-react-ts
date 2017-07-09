/**
 * Created by disme on 10/04/17.
 */



export type QuickWizardSlideName=
  "SLIDE1"|"SLIDE2"

export type SlideName=QuickWizardSlideName


export const WizardOneSlideNameDictionary = {
  "slide1": "SLIDE1" as SlideName,
  "slide2": "SLIDE2" as SlideName,



};






type SlideNameLabelsType={ [P in  SlideName]:string}

export const SlideLabel:SlideNameLabelsType={

  "SLIDE1":"First slide",
  "SLIDE2":"Second slide",

}

