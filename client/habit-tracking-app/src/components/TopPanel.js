import React, { Component } from "react";
import UserDetail from "./UserDatail";
import HabitChooser from './HabitChooser'


export default class TopPanel extends Component {
  render() {
    return (
      <div id="top-panel">
       <input type='text' />
       <UserDetail />
       <HabitChooser buttonTitle='New Habit'  title = 'What would you like to do now?'/>
      </div>
    );
  }
}
