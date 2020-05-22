import React, { Component } from "react";
import './App.css';
import {MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Button, Grid, Paper} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import { Container } from '@material-ui/core';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidUser : false,
      username:'',
      password:''
    };
  }


  handleUserNameChange = e => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
    
  };

  handlePasswordChange = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
    
  };

  handleClick = e => {
    e.preventDefault();
    axios.post(`http://localhost:3000/UserLogin/Login`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
        
        <Paper className="paper">
          <Container fixed>
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={this.handleUserNameChange}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={this.handlePasswordChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
           <br />
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            LOG IN
          </Button>
          </form>
          </Container>
          </Paper>
          
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default App;