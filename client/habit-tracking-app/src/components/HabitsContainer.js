import React, { Component } from 'react';

export default class HabitsContainer extends Component {
  render() {
    return (
      <div id="habits-container">
  <img src = {process.env.PUBLIC_URL + '/newHabits.png'} alt="habits"/>
      </div>
    )
  }
}
