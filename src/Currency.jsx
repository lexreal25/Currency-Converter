import React, { Component } from 'react'

//REACT-RENDER-PROPS(also called concept of children as fucntion)
const Currency = () =>
//implementing render-props
<div>
    <Amount 
        displayAmount = {amount => (
            <div>
                <Euro amount={amount}/>
                <Pounds amount={amount}/>
                <Cedis amount={amount}/>
            </div>
        )}
    />

</div>
/*
Another approach
    const Currency =()=> (
        <div>
            <h1>US Dollar to Euro:</h1>
            <Amount render={amount => <Euro amount={amount} />} />

            <h1>US Dollar to Pounds:</h1>
            <Amount render={amount => <Pounds amount={amount} />} />

        </div>
    )
 */

export default Currency


class Amount extends Component {
    constructor(props){
        super(props)
        this.state = {
            amount: 0,
        }
    }

    onIncrement = () =>{
        this.setState(state =>({amount: state.amount + 1}))
    }
    handleInputChange = (e) => {
        this.setState({amount: e.target.value})
    }
    onDecrement = () => {
        this.setState(state => ({amount: state.amount - 1}))
    }

    //Reset
    onReset = () => {
        this.setState(state => ({amount: state.amount = 0}))
    }

    render() {
        return (
            <div className='page'>
                <h1>Currency Converter</h1>
                <span>US Dollar: {this.state.amount}</span>
                <input  type='number' placeholder='Enter amount' onChange={this.handleInputChange}/>
                <button type='button' onClick={this.onIncrement}>+</button>
                <button type='button' onClick={this.onDecrement}>-</button>
                <button id='reset' type='reset' onClick={this.onReset}>Reset</button>
                {this.props.displayAmount(this.state.amount)}
                {/*this.props.render(this.state.amount) using the second approach */}
                <h2>All figures are rounded to two decimal places</h2>
            </div>
        )
    }
}

//Currency conputation

const Euro = ({amount}) => <p>Euro equivalence: {Math.round((amount * 0.84)*100)/100}</p>
const Pounds = ({amount}) => <p>Pounds equivalence: {Math.round((amount * 0.76)*100)/100}</p>
const Cedis = ({amount}) => <p>Cedis equivalence: {Math.round((amount * 5.81)*100)/100}</p>