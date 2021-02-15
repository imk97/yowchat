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
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return(
    <React.Fragment>
      <CssBaseLine/>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <img src={logo} className="App-logo" alt="logo" />
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField type="text" id="name" label="Name" fullWidth value={this.state.value} onChange={this.handleChange} />
            <Button type="submit" variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>} >Send</Button>
          </form>
        </div>
      </Container>
    </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(App);
