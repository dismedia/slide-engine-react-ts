/**
 * Created by disme on 10/04/17.
 */


export type QuickWizardSecitonName="WIZARD_ONE";


export type SectionName=QuickWizardSecitonName;


export const SectionNameNameDictionary = {
  wizardOne: "WIZARD_ONE" as SectionName,

};


type SectionNameLabelsType={ [P in  SectionName]:string}


export const SectionLabel:SectionNameLabelsType={

  "WIZARD_ONE":"First wizard"

}




