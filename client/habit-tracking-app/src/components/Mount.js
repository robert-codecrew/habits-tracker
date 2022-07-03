import React, { Component } from 'react'
import Footer from "./Footer";
import BottomPanel from './BottomPanel'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import TopPanel from './TopPanel';
import HabitsContainer from './HabitsContainer';

export default class Mount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       clicked:false,
       search:"",

    }
  }
checkClick = ()=>{
alert(this.state.search)
this.setState({clicked:true})


}
setSearch =  (e)=>{
this.setState({search:e.target.value})
if(this.state.clicked) this.setState({search:""})


}
  render() {
    return (
     <div id='mount'>
        <TopPanel searchEvt = {this.setSearch} clickEvt = {this.checkClick}/>
        <HabitsContainer/>
        <LeftPanel/>
        <RightPanel/>
        <BottomPanel/>
        <Footer/>
      </div>
    )
  }
}
