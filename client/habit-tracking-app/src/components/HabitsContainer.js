import React, { Component } from 'react';
import HabitChooser from './HabitChooser'
export default class HabitsContainer extends Component {
  render() {
    
    return (
      <div id="habits-container">
          <HabitChooser/>
      </div>
    )
  }
}
