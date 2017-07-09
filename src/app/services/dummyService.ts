/**
 * Created by disme on 07/03/2017.
 */

import {injectable} from "inversify"



export interface IDummyService{

  doIt(i:number):number;
  getAsyncData();

}
@injectable()
export class DummyService implements IDummyService{
  public doIt(i: number): number {
    return i*2;
  }

  public getAsyncData(){

    return (dispatch)=>{

      return new Promise((resolve,reject)=>{

        setTimeout(()=>{

          resolve("this is async data")
        },3000)
      })
    }


  }

}



export const funcGetAsyncData=()=>{

  return (dispatch)=>{

    return new Promise((resolve,reject)=>{

      setTimeout(()=>{

        console.log("this is async data");
        resolve("this is async data")
      },3000)
    })
  }

};
