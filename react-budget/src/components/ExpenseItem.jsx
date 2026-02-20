import React from 'react'
import { formatCurrency } from '../helpers'
import { formatDateToLocaleString } from '../helpers'

const ExpenseItem = ({ expense }) => {
  return (
    <>
    <td>{expense.name}</td>
    <td>{formatCurrency(expense.amount)}</td>
    <td>{formatDateToLocaleString(expense.createAt)}</td>
    </>
  )
}

export default ExpenseItem