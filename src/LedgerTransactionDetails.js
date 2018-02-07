import React from 'react';
import {connect} from 'react-redux'

const LedgerTransactionDetails = props => (
        <div>
            <h1>Ledger Transaction Details</h1>
            <h2>Detailed View of a transaction from the ledger.</h2>
            <p>Transaction #: {props.selectedTransaction.id}</p>
            <p>{props.selectedTransaction.action} {props.selectedTransaction.amount} ShintoCoin(s)</p>
        </div>
)

const mapStateToProps = (state)  => {
    return {
        selectedTransaction: state.selectedTransaction
    }
}

const WrappedLedgerTransactionDetails = connect (mapStateToProps)(LedgerTransactionDetails);

export default WrappedLedgerTransactionDetails;