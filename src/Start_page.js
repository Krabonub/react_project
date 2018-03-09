import React, {Component} from 'react';
import './Start_page.css';

class Start_page extends Component {
  render() {
    return (
      <div className="greeting">
        <h1>
          Hello everyone! <br/>
          Weclome to my first React.js project!
        </h1>
        <p>
          Here you can find several useful tools, witch you often can't find when you need them.
          Currently at the site are available such tools as calculator, timer and to-do list.
          Everithing is simple as you can find, so you don't need any guids or any other documentation, I suppouse ).
        </p>
        <h5 className="c">
          Created by &nbsp;<span>Skok Artyom</span>&nbsp; from Front-end Advaced 2 form
        </h5>
      </div>
    );
  }
}

export default Start_page;