import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mineCoins} from './state/actions'
import { Toast, showToast } from './toast'

const QuesAns = [
                    {question: 'What is the 7th Fibonnacci sequence number?', answer: '8'},
                    {question: 'What is the square root of 625?', answer: '25'},
                    {question: 'What is the numeric equivalent of 12 times 12?', answer: '144'},
                    {question: 'What is 10 squared?', answer: '100'},
                    {question: 'What is 0 times 0?', answer: '0'},
                ];

class Mine extends Component {
    constructor (props) {
        super (props);
        this.state = {
            inputVal: '',
            chosenQuestion: undefined,
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.chooseQuestion = this.chooseQuestion.bind(this);

    }
    componentDidMount () {
        this.chooseQuestion();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    chooseQuestion () {
        let randomQues = Math.floor(Math.random() * QuesAns.length);
        this.setState({chosenQuestion: QuesAns[randomQues], inputVal: ''});
    }

    render () {
        return (
        <div>
            <h1>Mine ShintoCoins</h1>
            <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>
            <p>{this.state.chosenQuestion && this.state.chosenQuestion.question}</p>
            <div className='form'>
                <input className='small-8 columns' name='inputVal' placeholder='Number' type='number' onChange={this.handleChange} value={this.state.inputVal}/>
                <button data-open="exampleModal1" className='small-3 columns' onClick={() => 
                    {if (this.state.inputVal === this.state.chosenQuestion.answer) {
                        this.props.mineCoins();
                        this.chooseQuestion();
                        this.setState({message: 'Success! You mined one coin.'}, function() {
                            showToast();
                        })
                    } else {
                        this.chooseQuestion();
                        this.setState({message: 'Sorry, you did not answer correctly. Please try again!'}, function() {
                            showToast();
                        })
                    }
                }}>Mine</button>
            </div>
            <Toast message={this.state.message} />
        </div>
        )
    }
}

const mapStateToProps = (state)  => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        mineCoins: () => {
            dispatch(mineCoins())
        }
    }
}
const WrapperMine = connect (mapStateToProps, mapDispatchToProps)(Mine);
export default WrapperMine;