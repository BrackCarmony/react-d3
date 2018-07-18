import React, { Component } from 'react';

import './App.css';

import BarChart from './components/BarChart';
import ScatterChart from './components/ScatterChart';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[5,10,1,3],
      scatter:[[50,50]]
    }
    setInterval(()=>{
      // this.state.data.push(Math.random()*10);
      // console.log(this.state.data);
      this.setState({
                      data: [...this.state.data, Math.random()*10],
                      scatter: [...this.state.scatter, [Math.random()*500, Math.random()*500]]
                    })
    }, 1000);
  }
  render() {
    return (
      <div className='App'>
       <div className='App-header'>
         <h2>d3 dashboard</h2>
         <Link to="/bar"> Bar Chart </Link>
         <Link to="/scatter"> Scatter Chart </Link>
        </div>
        <div>
         <Route path="/bar" render={()=>(
           <BarChart size={[500,500]} data={this.state.data}/>
         )}/>
         <Route path="/scatter" render={()=>(
           <ScatterChart size={[500,500]} data={this.state.scatter}/>
         )} />
       </div>
     </div>

    );
  }
}

export default App;
