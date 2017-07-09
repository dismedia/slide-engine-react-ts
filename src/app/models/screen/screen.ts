import {SlideName} from "./slide";
import {SectionName} from "./section";
/**
 * Created by disme on 10/04/17.
 */
export interface IScreen{

  sectionName:SectionName,
  slideName:SlideName

}



export interface IScreenAction {
  type:string,
  sectionName?:SectionName,
  slideName:SlideName
}




