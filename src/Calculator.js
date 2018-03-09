import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: '0',
      history: '0'
    };
  }
  
  round = (x, n = 3) => { //x - число, n - количество знаков
    if (isNaN(x) || isNaN(n)) return false;
    var m = Math.pow(10, n);
    return Math.round(x * m) / m;
  }
  
  isInteger = (str) => {
    return ((str.indexOf('.') != '-1') || isNaN(str)) ? false : true;
  }
  
  enter_digit = (digit) => {
    if (this.state.history.indexOf('=') != (-1)) {
      this.setState({
        entry: '',
        history: '0'
      });
    }
    if (this.state.entry.length >= 10) {
      alert('Maximum entry length achieved!');
      this.setState({
        history: '0',
        entry: '0'
      });
      return;
    }
    if (this.state.entry === '0' || this.state.entry === '+' || this.state.entry === '-' || this.state.entry === '*' || this.state.entry === '/') {
      this.setState({
        entry: ''
      });
    }
    this.setState((prevState, props) => {
      return {
        entry: prevState.entry + digit
      }
    })
  }
  
  enter_dot = () => {
    if (this.state.history.indexOf('=') != (-1)) {
      this.setState({
        entry: '0.',
        history: '0'
      });
      return;
    }
    if (!this.isInteger(this.state.entry)) {
      return;
    } else {
      if (this.state.entry === '0' || this.state.entry === '+' || this.state.entry === '-' || this.state.entry === '*' || this.state.entry === '/') {
        this.setState({
          entry: '0.'
        });
      } else {
        this.setState((prevState, props) => {
          return {
            entry: prevState.entry + '.'
          }
        })
      }
    }
  }
  
  enter_operation = (operation) => {
    if (this.state.history === '0' || this.state.history.indexOf('=') != (-1)) {
      this.setState({
        history: ''
      })
    }
    if (isNaN(this.state.entry)) {
      return;
    }
    this.setState((prevState, props) => {
      return {
        entry: operation,
        history: prevState.history + prevState.entry + operation
      }
    })
  }
  
  calculate = () => {
    if (isNaN(this.state.entry)) {
      return;
    }
    if (this.state.history.indexOf('=') != (-1)) {
      this.setState((prevState, props) => {
        var equalityPosition = prevState.history.indexOf('=');
        return {
          history: prevState.history.slice(equalityPosition + 1)
        }
      })
    }
    if (this.state.history === '0') {
      this.setState({
        history: ''
      })
    }
    this.setState((prevState, props) => {
      var tmpAnswer = this.round(eval(prevState.history + prevState.entry));
      if((prevState.history + prevState.entry + '=' + tmpAnswer).length > 25 || tmpAnswer.length > 10) {
        alert('Maximum history length achieved!');
        return {
          history: '0',
          entry: '0'
        };
      }
      else{
        return {
          entry: tmpAnswer,
          history: prevState.history + prevState.entry + '=' + tmpAnswer
        }
      }
    });
  }
  
  clear_entry = () => {
    this.setState({
      entry: '0'
    });
  }
  
  clear_all = () => {
    this.setState({
      entry: '0',
      history: '0',
      answer: ''
    });
  }
  
  render() {
    return (
      <div>
        <div id='calculator'>
          <div id='title'>
            <h5>ELECTRONIC CALCULATOR</h5>
          </div>
          
          <div id='entrybox' className='text-right'>
            <div id='entry'>
              <p id='answer'>{this.state.entry}</p>
            </div>
            <div id='history'>
              <p>{this.state.history}</p>
            </div>
          </div>
          
          <div id='buttons'>
            
            <button onClick={this.clear_all} className='red' value='c'>AC</button>
            <button onClick={this.clear_entry} className='red' value='b'>CE</button>
            <button onClick={this.enter_operation.bind(Calculator, '/')} value='/'>&divide;</button>
            <button onClick={this.enter_operation.bind(Calculator, '*')} value='*'>x</button>
            
            <button onClick={this.enter_digit.bind(Calculator, '7')} value='7'>7</button>
            <button onClick={this.enter_digit.bind(Calculator, '8')} value='8'>8</button>
            <button onClick={this.enter_digit.bind(Calculator, '9')} value='9'>9</button>
            <button onClick={this.enter_operation.bind(Calculator, '-')} value='-'>-</button>
            
            <button onClick={this.enter_digit.bind(Calculator, '4')} value='4'>4</button>
            <button onClick={this.enter_digit.bind(Calculator, '5')} value='5'>5</button>
            <button onClick={this.enter_digit.bind(Calculator, '6')} value='6'>6</button>
            <button onClick={this.enter_operation.bind(Calculator, '+')} value='+'>+</button>
            
            <button onClick={this.enter_digit.bind(Calculator, '1')} value='1'>1</button>
            <button onClick={this.enter_digit.bind(Calculator, '2')} value='2'>2</button>
            <button onClick={this.enter_digit.bind(Calculator, '3')} value='3'>3</button>
            
            <button onClick={this.enter_digit.bind(Calculator, '0')} id='zeroButton' className="long" value='0'>0
            </button>
            <button onClick={this.enter_dot} value='.'>.</button>
            <button onClick={this.calculate} id='equalButton' value='='>=</button>
          
          </div>
          
          <div id='tester'></div>
        </div>
      
      </div>
    );
  }
}

export default Calculator;