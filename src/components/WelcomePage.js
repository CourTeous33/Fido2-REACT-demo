import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { createCreds, validateCreds } from '../common/WebAuthn'

class WelcomePage extends Component {
    constructor () {
        super();
        this.state = {
          userName: "foo",
          userCIds: {"foo": null},
        };
    }

    // addUserCId = (user_name, CId) => {
    //     const oldMap = this.state.userCIds;
    //     this.setState({ userCIds: newMap });
    //     console.log(this.state.userCIds);
    // };

    // getUserCId = (userName) => {
    //     return this.state.userCIds[userName];
    // }

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