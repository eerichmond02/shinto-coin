import React, {Component} from 'react';
import {buyCoins} from './state/actions';
import {connect} from 'react-redux';
import { Toast, showToast } from './toast'

class Buy extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputVal: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
        <div>
            <h1>Buy ShintoCoins</h1>
            <p>Current ShintoCoin Value: ${this.props.curValue}</p>
            <p>Number of ShintoCoins Owned: {this.props.numCoins}</p>
            <div className='form'>
                <input className='small-8 columns' name='inputVal' type='number' onChange={this.handleChange} value={this.state.inputVal} placeholder='Number'/>
                <button className='small-3 columns' onClick={() => {
                    this.props.buyCoins(this.state.inputVal);
                    this.setState({message: 'You bought ' + this.state.inputVal + ' coin(s)!'}, function() {
                            showToast();
                        })
                    this.setState({inputVal: ''}) 
                }}>Buy</button>
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
        buyCoins: (payload) => {
            dispatch(buyCoins(payload))
        }
    }
}
const WrapperBuy = connect (mapStateToProps, mapDispatchToProps)(Buy);

export default WrapperBuy;