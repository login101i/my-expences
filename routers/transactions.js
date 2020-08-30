const express = require('express')
const router = express.Router()
// teraz pobieram z folderu controllers
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions')

router
    .route('/')
    .get(getTransactions)
    .post(addTransaction)

router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router