import logo from './logo.svg';
import './App.css';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
    width: '100%',
  }
});

class App extends React.Component {
  
  render() {
    const { classes } = this.props;
    return(
    <React.Fragment>
      <CssBaseLine/>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <img src={logo} className="App-logo" alt="logo" />
          <form className={classes.form} noValidate autoComplete="false">
            <TextField id="name" label="Name" fullWidth/>
            <Button variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>} >Send</Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(App);
