import * as React from 'react';
import TextField from "material-ui/TextField";

export class Login extends React.Component<any,any> {

    constructor(props) {
        super(props);

        this.state = {}

    }

    componentDidMount() {

    }

    render() {
        return (<div>

          <TextField
            fullWidth={true}
            hintText="username"
          />

          <TextField
            fullWidth={true}
            hintText="password"
          />

        </div>)

    }

}


