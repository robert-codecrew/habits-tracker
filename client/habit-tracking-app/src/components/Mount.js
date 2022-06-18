import React, { Component } from 'react'
import Footer from "./Footer";
import BottomPanel from './BottomPanel'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import TopPanel from './TopPanel';
import HabitsContainer from './HabitsContainer';

export default class Mount extends Component {
    
  render() {
    return (
     <div id='mount'>
     
       
            <TopPanel/>
        <HabitsContainer/>
        <LeftPanel/>
     
        <RightPanel/>
        <BottomPanel/>
        <Footer/>
      </div>
    )
  }
}
