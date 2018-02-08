import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sellCoins } from './state/actions'

class Sell extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputVal: '',
            validated: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value}, function() {
        	this.validate();
        });
    }

    validate() {
    	if (this.props.numCoins < parseInt(this.state.inputVal)) {
    		this.setState({validated: false})
    	} else {
    		this.setState({validated: true})
    	}
    }

    render() {
        return (
        <div>
        <h1>Sell ShintoCoins</h1>
        <p>Current ShintoCoin Value: ${this.props.curValue}</p>
        <p>Number of ShintoCoins Owned: {this.props.numCoins}</p>
        <input name='inputVal' type='number' onChange={this.handleChange} value={this.state.inputVal} placeholder='Number'/>
        <button disabled={!this.state.validated} onClick={() => {this.props.sellCoins(this.state.inputVal); this.setState({inputVal: ''}) }}>Sell</button>
        </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return {
        curValue: state.curValue,
        numCoins: state.numCoins
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sellCoins: (payload) => {
            dispatch(sellCoins(payload))
        }
    }
}
const WrapperSell = connect (mapStateToProps, mapDispatchToProps)(Sell);

export default WrapperSell;