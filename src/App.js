import React, {Component} from 'react';
import Calculator from './Calculator';
import Timer from './Timer';
import To_do_list from './To_do_list';
import Start_page from './Start_page';
import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import createHistory from 'history/createHashHistory';

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabStatusArr: ["pagenator", "pagenator", "pagenator"]
    }
  }
  selectComponent = (tabIndex) => {
    this.setState((prevState, props) => {
      return {
        tabStatusArr: prevState.tabStatusArr.map((item, index) => {
          if (index == tabIndex) {
            return "pagenator selected-pagenator";
          }
          else {
            return "pagenator";
          }
        })
      }
    });
  }
  render() {
    return (
      <HashRouter>
        <div className="main-page">
          <nav>
            <Link to="/Calculator">
              <div className={this.state.tabStatusArr[0]} onClick={this.selectComponent.bind(App, 0)}>
                <img className="pagenator-img" alt="Calculator icon" src="https://image.flaticon.com/icons/png/128/148/148788.png"/>
                <p>Calculator</p>
              </div>
            </Link>
            
            <Link to="/Timer">
              <div className={this.state.tabStatusArr[1]} onClick={this.selectComponent.bind(App, 1)}>
                <img className="pagenator-img" alt="Timer icon" src="https://png.icons8.com/dusk/540//timer.png"/>
                <p>Timer</p>
              </div>
            </Link>
            
            <Link to="/To_do_list">
              <div className={this.state.tabStatusArr[2]} onClick={this.selectComponent.bind(App, 2)}>
                <img className="pagenator-img" alt="To do list icon"
                     src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-256.png"/>
                <p>To-do list</p>
              </div>
            </Link>
          </nav>
          <main>
            <div className="content">
              
              <div>
                <Route exact path="/" component={Start_page}/>
                <Route exact path="/Calculator" component={Calculator}/>
                <Route exact path="/Timer" component={Timer}/>
                <Route exact path="/To_do_list" component={To_do_list}/>
              </div>
            
            </div>
          </main>
        </div>
      </HashRouter>
    );
  };
}

export default App;