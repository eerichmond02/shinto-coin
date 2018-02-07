import React from 'react';
import {connect} from 'react-redux';
import {selectTransaction} from './state/actions';
import {Link, Route, withRouter} from 'react-router-dom';
import LedgerTransactionDetails from './LedgerTransactionDetails'

const Ledger = (props) => (
    <div>
        <h1>Browse Ledger</h1>
        <h2>Here you can browse all ShintoCoin transactions.</h2>
        <table>
        <tbody>
        <tr>
          <th>Action</th>
          <th>Amount</th>
          <th>Value</th>
          <th></th>
        </tr>
        {props.transactions.map((transaction, idx) => (
            <tr>
                <td>{transaction.action}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.value}</td>
                <td>
                    <Link to={`/transaction/${transaction.id}`}>
                    <button onClick={() => {props.selectTransaction(transaction); props.history.push(`/transaction/${transaction.id}`)}}>Details</button>
                    </Link>
                </td>
            </tr>           
        )

        )}
      </tbody>
    </table>

    <Route path="/transaction/:id" component={LedgerTransactionDetails} />
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