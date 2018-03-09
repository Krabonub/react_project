import React,{Component} from 'react';
import Calculator from './Calculator';
import './Wrapper.css';

class Wrapper extends Component{
  render(){
    return(
      <div className="main-page">
        <nav>
          <div className="pagenator selected-pagenator">
            <img className="pagenator-img" src="https://image.flaticon.com/icons/png/128/148/148788.png" />
            <p>Calculator</p>
          </div>
          <div className="pagenator">
            <img className="pagenator-img" src="https://www.shareicon.net/data/128x128/2016/07/24/800962_time_512x512.png" />
            <p>Stop-watch</p>
          </div>
          <div className="pagenator">
            <img className="pagenator-img" src="https://cdn2.iconfinder.com/data/icons/business-office-icons/256/To-do_List-256.png" />
            <p>To-do list</p>
          </div>
        </nav>
        <main>
          <div className="content">
            <Calculator />
          </div>
        </main>
      </div>
    );
  };
}

export default Wrapper;