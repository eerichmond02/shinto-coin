import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sellCoins } from './state/actions';
import { Toast, showToast } from './toast';

class Sell extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputVal: '',
            validated: false,
            message: ''
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
	        <div className='form'>
	        	<input className='small-8 columns'name='inputVal' type='number' onChange={this.handleChange} value={this.state.inputVal} placeholder='Number'/>
	        	<button className='small-3 columns'disabled={!this.state.validated} onClick={() => {
	        		this.props.sellCoins(this.state.inputVal);
                    this.setState({message: 'You sold ' + this.state.inputVal + ' coin(s)!'}, function() {
                            showToast();
                        })
	        		this.setState({inputVal: ''}) 
	        	}}>Sell</button>
	        </div>
	        <Toast message={this.state.message} />
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