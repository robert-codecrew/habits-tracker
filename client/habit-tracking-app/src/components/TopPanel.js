import React, { Component } from "react";

import HabitChooser from './HabitChooser'
import SearchButton from './SearchButton.js'

export default class TopPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
    }
  }
  render() {
    return (
      <div id="top-panel">
        <div className='search-div'>
          <input
            className='no-outline'
            onChange={this.props.searchEvt}
            style={
              {
                width: '350px',
                letterSpacing: '2px',
                borderTop: "transparent",
                borderLeft: "transparent",
                borderBottom: "1px solid black",
                background: 'inherit',
                borderRight: "transparent"
              }
            }
            type='text'
            placeholder="Search Habits" />
          <SearchButton clickMe={this.props.clickEvt} />
        </div>
        <HabitChooser buttonTitle='New Habit' title='What would you like to do now?' />
      </div>
    );
  }
}
