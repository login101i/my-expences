import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

import {Transaction} from './Transaction'

export const TransactionList = () => {

const {transactions} =useContext(GlobalContext)
console.log(transactions)

    return (
        <>
            <h3>Historia</h3>
            <ul id="list" className="list">

            {transactions.map(trans=>(
               <Transaction
               key={trans.id}
               transaction={trans}
               />
            ))}

               
            </ul>
        </>
    )
}
