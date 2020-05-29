import React, { Component } from 'react';
import './App.css';
import Speech from 'react-speech';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import allCards from './utilities/LoteriaCards.json';
import * as cardAction from './utilities/CardAction.js';

class App extends Component {
  constructor(props,context) {
    super(props,context);
    let objInterval;

    this.state = {
      speed      : 2000,
      item       : null,
      prevItems  : allCards,
      supported  : true,
      lang       : props.lang || "es-MX",
      autoPlay   : false,

    };
  }

  componentWillMount() {
    if ("speechSynthesis" in window) {
      this._speech = new SpeechSynthesisUtterance();
      this._speech.onend = () => this.setState({ isSpeeking: false });
    } 
    else { this.setState({ supported: false }); }
  }

  componentDidMount() { if (this.state.supported && this.state.autoPlay) { this.speak(); } }

  speak = () => {
    this._speech.text = this.state.text;
    this._speech.lang = this.state.lang;
    this.setState({ isSpeeking: true });
    window.speechSynthesis.speak(this._speech);
  };

  stop = () => {
    window.speechSynthesis.cancel();
  };


  handleTimerPause = () => { 
    clearInterval(this.objInterval);                                                                         
    window.speechSynthesis.cancel(); 
  }

  handleTimerStop  = () => { 
    clearInterval(this.objInterval); 
    window.speechSynthesis.cancel(); 
    this.setState({item : cardAction.getMainLoteriaImage, prevItems : allCards }) 
  }

  handleTimeStart  = () => { 
    this.objInterval = setInterval(() => { 
      let prevItems  = this.state.prevItems;
      let itemNumber = Math.floor(Math.random() * prevItems.length);
      let item       = prevItems[itemNumber];
      if (prevItems.length > 0) { 
        prevItems.splice(itemNumber,1); 
        this._speech.text = item.name;
        this._speech.lang = this.state.lang;
        window.speechSynthesis.speak(this._speech);
        this.setState({ item: item })                                                  
      }
      else clearInterval(this.objInterval);
    } , this.state.speed ) 
  }

  handleSpeedChange = (event) => { 
    this.setState({speed : event.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card style={{maxWidth:'100%',marginTop:'20px', backgroundColor:'lightblue'}}>
            <CardActionArea>
              { (this.state.item !== null && cardAction.getImage(this.state.item.name)) || cardAction.getMainLoteriaImage }
              <InputLabel id="demo-simple-select-label">FINISE</InputLabel>
            </CardActionArea>
            <CardActions>
              {
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.speed}
                onChange={this.handleSpeedChange}
                displayEmpty
              >
                <MenuItem value={3000}>Slow  </MenuItem>
                <MenuItem value={2000}>Normal</MenuItem>
                <MenuItem value={1500}>Fast  </MenuItem>
              </Select>              
              }
              <Button variant="contained" color="primary" onClick = {this.handleTimeStart}>
                Start
              </Button>
              <Button variant="contained" onClick = {this.handleTimerPause}>
                Pause
              </Button>
              <Button variant="contained"  color="secondary" onClick = {this.handleTimerStop}>
                Stop
              </Button>
            </CardActions>
          </Card>        
        </header>
      </div>
    );
  }
}

export default App;
