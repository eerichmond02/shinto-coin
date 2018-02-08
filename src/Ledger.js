import React from 'react';
import {connect} from 'react-redux';
import {selectTransaction} from './state/actions';
import {Link, Route, withRouter} from 'react-router-dom';
import LedgerTransactionDetails from './LedgerTransactionDetails'

const Ledger = (props) => (
    <div>
        <h1>Browse Ledger</h1>
        <p>Here you can browse all ShintoCoin transactions.</p>
        <table>
            <tbody>
              <tr>
                <th id='tableHeader' colspan="4">ShintoCoin Ledger</th>
              </tr>
            <tr>
              <th>Action</th>
              <th>Amount</th>
              <th>Value</th>
              <th></th>
            </tr>
            {props.transactions.map((transaction, idx) => (
                <tr key={idx}>
                    <td>{transaction.action}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.value}</td>
                    <td>
                        <Link to={`/transaction/${transaction.id}`}>
                            <button onClick={() => {props.selectTransaction(transaction);}}>Details</button>
                        </Link> 
                    </td>
                </tr>           
            ))}
          </tbody>
        </table>
    </div>
)


const mapStateToProps = (state)  => {
    return {
        transactions: state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectTransaction: (payload) => {
            dispatch(selectTransaction(payload))
        }
    }
}
const WrappedLedger = connect (mapStateToProps, mapDispatchToProps)(Ledger);

export default withRouter(WrappedLedger);