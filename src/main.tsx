import "reflect-metadata";
import {bootsrapDiContainer} from "./app/container/container";
bootsrapDiContainer();

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import AppContainer from './containers/AppContainer'

import {configureStore} from "./app/redux/store";

import 'velocity-animate';
import 'velocity-animate/velocity.ui';

const {Router, browserHistory} = require('react-router');




// ========================================================
// Store Instantiation
// ========================================================
const initialState = (window as any).___INITIAL_STATE__
//const store = createStore(initialState)



// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {

  const store = configureStore(browserHistory, {});



  ReactDOM.render(
    <AppContainer store={store}  />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
let hmr = (module as any).hot;

if (__DEV__) {
  if (hmr) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    // hmr.accept('./routes/index', () =>
    //   setImmediate(() => {
    //     ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    //     render()
    //   })
    // )
  }
}

// ========================================================
// Go!
// ========================================================
render()
