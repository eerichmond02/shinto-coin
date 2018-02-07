import {MINE_COINS, BUY_COINS, SELECT_TRANSACTION} from './types';

class TransactionDetail {
    constructor (action, amount, value) {
        this.id = Math.floor((Math.random()*9999) + 1);
        this.action = action;
        this.amount = amount;
        this.value = value;
    }
}

const initialState = {
    transactions: [],
    numCoins: 0,
    curValue: 1,
    balance: 0,
    selectedTransaction: undefined
}

export default (state=initialState, action) => {
    switch (action.type) {
        case MINE_COINS:
            return {...state, 
                numCoins: state.numCoins + 1, 
                balance: state.balance + state.curValue, 
                curValue: state.curValue + 1,
                transactions: state.transactions.concat(new TransactionDetail('Mined', 1, state.curValue))
            };
            case BUY_COINS:
            return {...state, 
                numCoins: state.numCoins + parseInt(action.payload), 
                balance: state.balance + parseInt(action.payload) * state.curValue, 
                curValue: state.curValue + 1,
                transactions: state.transactions.concat(new TransactionDetail('Bought', parseInt(action.payload), state.curValue))
            };
            case SELECT_TRANSACTION: 
            return {...state,
                    selectedTransaction: action.payload  
            }
        default:
            return state;
    }
}

