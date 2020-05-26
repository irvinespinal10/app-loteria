import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import allCards from './utilities/LoteriaCards.json';
import * as cardAction from './utilities/CardAction.js';

class App extends Component {
  constructor(props,context) {
    super(props,context);
    let objTimeout;

    this.state = {
      item       : null,
      prevItems  : allCards
    };
  }

handleTimerStop  = () => { clearInterval(this.objTimeout); this.setState({item : cardAction.getMainLoteriaImage, prevItems : [] }) }
handleTimerPause = () => { clearInterval(this.objTimeout);                                                                         }
handleTimeStart  = () => { 
  this.objTimeout = setInterval(() => { 
    /*let prevItems = this.state.prevItems;
    let item      = allCards[Math.floor(Math.random() * allCards.length)];
    if (!prevItems.includes(item) && allCards.length > prevItems.length) { 
      prevItems.push(item); 
      this.setState({ item: item })                                                  
    }*/
    let prevItems  = this.state.prevItems;
    let itemNumber = Math.floor(Math.random() * prevItems.length);
    let item       = prevItems[itemNumber];
    if (prevItems.length > 0) { 
      prevItems.splice(itemNumber,1); 
      this.setState({ item: item })                                                  
    }
    else clearInterval(this.objTimeout);
  } , 2000 ) 
}

render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card style={{maxWidth:'100%',marginTop:'20px', backgroundColor:'lightblue'}}>
            <CardActionArea>
              { (this.state.item !== null && cardAction.getImage(this.state.item.name)) || cardAction.getMainLoteriaImage }
            </CardActionArea>
            <CardActions>
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
