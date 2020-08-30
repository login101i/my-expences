import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'


export const Transaction = ({ transaction }) => {
    const amount = transaction.amount
    const sign = transaction.amount > 0 ? "+" : "-"

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount > 0 ? 'plus' : "minus"}>
            {transaction.text} <span>{sign}{Math.abs(amount)}</span>
            <button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn">x</button>
        </li>
    )
}
