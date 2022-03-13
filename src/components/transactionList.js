import React, { useContext } from 'react';
import Transaction from './transaction';
import { GlobalContext } from '../context/globalState';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); //gets state from global state 

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionList;
