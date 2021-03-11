import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:'Kmin'
    }

  }

  click=()=>{
    if(this.state.text=='Hello'){
      this.setState({text :'Kmin'})
    }else{
      this.setState({text:'Hello'})
    }
  }

  render(){
    return (
      <Button
      style={{fontSize:'30px'}}
      className={'btn btn-success'}
      text={this.state.text}
      onClick={this.click}
            />

    )
  }
}


export default App;
