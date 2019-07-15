import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { createCreds, validateCreds } from '../common/WebAuthn'

class WelcomePage extends Component {
    constructor () {
        super()
        this.state = {
          userName: "foo"
        }
    }

    setUserName = (event) => {
        this.setState({ userName: event.target.value });
    };


    render () {
        return (
            <React.Fragment>
                <h3> This is a demo of fido2 with REACT </h3>
                <Input placeholder="User Name" onChange={this.setUserName}/>
                <Button variant="contained" color="primary"
                onClick={() => createCreds(this.state.userName)}>
                    Regist
                </Button>
                <Button variant="contained" color="primary"
                onClick={() => validateCreds(this.state.userName)}>
                    Log in
                </Button>
            </React.Fragment>
        );
    }
}

export default WelcomePage;