const express = require('express');
const { addTransaction, getTransactions, deleteTransaction } = require('../controllers/transactionController');
const router = express.Router();

// Add transaction
router.post('/', addTransaction);

// Get all transactions
router.get('/', getTransactions);

// Delete transaction
router.delete('/:id', deleteTransaction);

module.exports = router;