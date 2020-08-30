import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'


export const Transaction = ({ transaction }) => {
    const amount = transaction.amount
    const sign = transaction.amount > 0 ? "+" : "-"

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={amount > 0 ? 'plus' : "minus"}>
            {transaction.text} <span>{sign}{numberWithCommas(Math.abs(amount))} zł</span>
            <button
                onClick={() => deleteTransaction(transaction._id)}
                className="delete-btn">x</button>
        </li>
    )
}
