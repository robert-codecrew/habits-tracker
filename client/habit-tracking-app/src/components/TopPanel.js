import React, { Component } from "react";

import HabitChooser from './HabitChooser'

export default class TopPanel extends Component {
  render() {
    return (
      <div id="top-panel">
       <input type='text' />
       <HabitChooser buttonTitle='New Habit'  title = 'What would you like to do now?'/>
      </div>
    );
  }
}
