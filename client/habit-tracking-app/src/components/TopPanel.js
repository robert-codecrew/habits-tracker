import React, { Component } from "react";

import HabitChooser from './HabitChooser'
import SearchButton from './SearchButton.js'

export default class TopPanel extends Component {
  render() {
    return (
      <div id="top-panel">
        <div className='search-div'>  <input className = 'no-outline' style={{width:'350px', letterSpacing:'2px',borderTop:"transparent",borderLeft:"transparent",borderBottom:"1px solid black",background:'inherit',borderRight:"transparent"}} type='text' placeholder="Search Habits" />
       <SearchButton/></div>
       <HabitChooser buttonTitle='New Habit'  title = 'What would you like to do now?'/>
      </div>
    );
  }
}
