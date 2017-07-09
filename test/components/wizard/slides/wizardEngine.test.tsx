import {ReactWrapper, mount} from "enzyme";
import * as React from 'react';
import {SlideDefinition, WizardEngine} from "../../../../src/app/components/wizard/engine/wizardEngine";
import {MockSlideA, MockSlideB} from "../../../../mocks/MockSlide";



const mockReducer = (value) => {

  return value;
};

const testDefinition: Array<SlideDefinition<any>> = [
  {
    slideName: "A",
    component: MockSlideA,
    mapState: (state) => state.A,
    createAction: (value) => {
      return mockReducer({A: value});
    },

    next: (state) => {

      return {
        slideName: "slideB",
        sectionName: ""
      }

    },
    includeInPaths: () => true
  },
  {
    slideName: "B",
    component: MockSlideB,
    mapState: (state) => state.B,
    createAction: (value) => {
      return mockReducer({A: value});
    },

    next: (state) => {

      return {
        slideName: "A",
        sectionName: ""
      }

    },
    includeInPaths: () => true
  },


];


describe('wizard engine', () => {

  let component: ReactWrapper<any, any>;

  let definition
  let props;

  beforeEach(() => {

    let component: ReactWrapper<any, any>;

    definition = testDefinition

    props = {

      definition,
      currentScreen: {sectionName: "", slideName: "A"},

      state: {A: "0", B: "0", C: "0"},
      dispatch: () => {
        console.log("dispatched")

      },

      goToScreen: (_) => {
        console.log("go to screen")
      }
    }


  });

  test('should display valid current screen', () => {


    component = mount(<WizardEngine {...props} />)

    expect(component.find("#title").exists()).toBe(true);
    expect(component.find("#title").text()).toBe("slide A");


    props.currentScreen = {sectionName: "", slideName: "B"};

    component = mount(<WizardEngine {...props} />)

    expect(component.find("#title").exists()).toBe(true);
    expect(component.find("#title").text()).toBe("slide B");


  });


  test('should map valid state', () => {


    component = mount(<WizardEngine {...props} />)
    expect(component.find("#value").text()).toBe(props.state.A);


  });


  test('should call next with screen defined (A->B)', () => {


    let calledWith = null;
    props.goToScreen = (screen) => {
      calledWith = screen
    }
    component = mount(<WizardEngine {...props} />)


    expect(component.find("#next").exists()).toBe(true);
    component.find("#next").simulate("click");

    expect(calledWith.slideName).toBe("slideB")


  });


  test('should call defined reducer (or setter) with value pinned to injected property A->1', () => {


    let calledWith = null;
    props.dispatch = (action) => {
      calledWith = action
    }
    component = mount(<WizardEngine {...props} />)

    component.find("#setOption1").simulate("click");

    expect(calledWith.A).toEqual("1")
    component.find("#setOption2").simulate("click");

    expect(calledWith.A).toEqual("2")

  });


});


