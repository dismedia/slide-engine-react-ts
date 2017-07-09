/**
 * Created by disme on 07/03/2017.
 */


import {Container} from "inversify"
import {IDummyService, DummyService} from "../services/dummyService";
const chalk = require('chalk');


const diContainer = new Container();

const bootsrapDiContainer=()=>{
  diContainer.bind<IDummyService>("dummyService").toConstantValue(new DummyService());


  console.log(chalk.red.bold('di bootstraped'));


}


const mockDiContainer=(mockBindings:(container:Container)=>void)=>{
  mockBindings(diContainer);
  console.log(chalk.blue.bgRed.bold('di mocked'));
}



export { diContainer,bootsrapDiContainer,mockDiContainer };
