import * as React from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {Provider} from 'react-redux'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import {ReduxAsyncConnect} from 'redux-connect';
import Component = React.Component;


import {SectionWrapper} from "../app/components/wizard/SectionWrapper";


import '../styles/core.scss';



injectTapEventPlugin()

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

class Test0 extends Component<any,any> {
  constructor(p) {
    super(p)
    debugger;

  }

  render() {
    // 2. access data as props

    return (
      <div>foo?</div>
    )
  }
}

export default class AppContainer extends React.Component<any, any> {

  shouldComponentUpdate() {
    return false
  }

  render() {


    const {store,} = this.props;



    return (

      <MuiThemeProvider>
        <Provider store={store}>
          <Router render={(props) => <ReduxAsyncConnect {...props}/>} history={browserHistory}>

            <Route path="/wizard/:section/:slide" component={SectionWrapper}/>

          </Router>

        </Provider>
      </MuiThemeProvider>

    )
  }
}

/*




 <Provider store={store}>
 <MuiThemeProvider>
 <div style={{
 height: '100%',
 padding: '100px 20%'
 }}>
 <Router history={browserHistory} children={routes} />




 <RaisedButton label='Default' />
 <DatePickerWidget />
 <div>
 <RadioButtonGroup name='shipSpeed' defaultSelected='not_light'>
 <RadioButton value='light' label='Simple' style={styles.radioButton} />
 <RadioButton value='not_light' label='Selected by default' style={styles.radioButton} />
 <RadioButton value='ludicrous' label='Custom icon' checkedIcon={<ActionFavorite />}
 uncheckedIcon={<ActionFavoriteBorder />} style={styles.radioButton} />
 </RadioButtonGroup>
 <RadioButtonGroup name='shipName' defaultSelected='community'>
 <RadioButton value='enterprise' label='Disabled unchecked' disabled style={styles.radioButton} />
 <RadioButton value='community' label='Disabled checked' disabled style={styles.radioButton} />
 </RadioButtonGroup>
 <RadioButtonGroup name='notRight' labelPosition='left' style={styles.block}>
 <RadioButton value='reverse' label='Label on the left' style={styles.radioButton} />
 </RadioButtonGroup>
 </div>
 </div>
 </MuiThemeProvider>
 </Provider>

 */
