import React, { Component } from 'react'
import Currency from './Currency';
import './App.css'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: false,
    };
  }

  toggleShow = () => {
    this.setState(state => ({isShow: !state.isShow}))
  }


  render() {
    const greetings = {
      
      details: 'Welcome'
    }
    return (
      <div>
        <Button onClick={this.toggleShow}/>  
        {this.state.isShow ? <Greeting {...greetings} /> : null}
        
        <Currency />
      </div>
    )
  }
}

const Button = ({onClick}) =>(
  <button onClick={onClick} type='button'>Toggle Show</button>
)
const Greeting = ({subject ='Donot Reply', details}) => (
  <div>
    <Title title={subject}/>
    <Description details={details} />
  </div>
);
//React props with Default value
Greeting.defaultProps ={
  subject:'Ignore this'
}
const Title =({title})=><h1>{title}</h1>

const Description =({details})=><h2>{details}</h2>
