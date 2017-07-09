/**
 * Created by disme on 13/03/2017.
 */

export interface IWizardOne {

  slide1Value:string;
  slide2Value:string;
  slide3Value:string;
}

export interface IWizardOneAction {
  type: string;
  value:any;
}

export interface IQuickWizardSetPropertyAction extends IWizardOneAction {

  value: Partial<IWizardOne>;

}

