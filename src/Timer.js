import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      isPaused: true,
      timerId: 0,
      tick: () => {
        if (this.state.seconds >= 1)
          this.timeDecrement('seconds');
        else {
          if (this.state.minutes >= 1) {
            this.timeDecrement('minutes');
            this.setState({seconds: 59});
          }
          else {
            this.setState({isPaused:true});
          }
        }
      }
    };
  }
  
  
  start = () => {
    if (this.state.isPaused) {
      this.setState((prevState, props) => {
        return {
          timerId: setInterval(function () {
            if (prevState.minutes > 0 || prevState.seconds > 0) {
              prevState.tick();
            } else {
              clearInterval(prevState.timerId);
            }
          }, 1000),
          isPaused:false
        }
      });
    }
    else {
      clearInterval(this.state.timerId);
      this.setState({isPaused:true});
    }
  }
  
  reset = () => {
    this.setState({
      minutes: 0,
      seconds: 0,
      isPaused:true
    })
    clearInterval(this.state.timerId);
  }
  
  timeIncrement = (field) => {
    this.setState((prevState, props) => {
      if (prevState[field] < 59) {
        return {
          [field]: prevState[field] + 1
        }
      }
      else {
        return;
      }
    });
  }
  
  timeDecrement = (field) => {
    this.setState((prevState, props) => {
      if (prevState[field] > 0) {
        return {
          [field]: prevState[field] - 1
        }
      }
      else {
        return;
      }
    });
  }
  
  render() {
    return (
      <section>
        <div className="timer">
          <h5 className="timer_h5">D I G I T A L &nbsp; T I M E R</h5>
          <div className="row">
            
            <div className="controls">
              <div className="set_time_box">
                <button className="timer_button" onClick={this.timeIncrement.bind(Timer, 'minutes')}>+</button>
                <p className="timer_p">Min</p>
                <button className="timer_button" onClick={this.timeDecrement.bind(Timer, 'minutes')}>-</button>
              </div>
            </div>
            
            <div id="clock">
              <div className="number" id="mitutes_left">{this.state.minutes}</div>
              <div className="dots">:</div>
              <div className="number" id="seconds_left">{this.state.seconds}</div>
            </div>
            
            <div className="controls">
              <div className="set_time_box">
                <button className="timer_button" onClick={this.timeIncrement.bind(Timer, 'seconds')}>+</button>
                <p className="timer_p">Sec</p>
                <button className="timer_button" onClick={this.timeDecrement.bind(Timer, 'seconds')}>-</button>
              </div>
            </div>
          
          </div>
          <div>
            <button className="start_button timer_button red" onClick={this.start}>Start</button>
            <button className="reset_button" onClick={this.reset}>Reset</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Timer;


