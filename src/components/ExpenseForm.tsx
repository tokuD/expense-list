'use client'
import { useSetExpenseList } from '@/providers'
import { ExpenseProps } from '@/types'
import { dateFormatter } from '@/utils'
import React, { useState } from 'react'

type Props = {}

const ExpenseForm = (props: Props) => {
  const setExpenseList = useSetExpenseList()
  const [title, setTitle] = useState<string>('')
  const [amount, setAmount] = useState<number | ''>('')
  const [date, setDate] = useState<string | ''>('')

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (title.trim() === '' || amount === '' || date === '') {
      return
    }
    setExpenseList((prev) => [
      {
        id: new Date().toString(),
        name: title,
        date: new Date(date),
        price: amount as number,
      },
      ...prev,
    ])
    setTitle('')
    setAmount('')
    setDate('')
  }

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value))
  }

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  return (
    <form
      onSubmit={submitHandler}
      className="rounded-md p-4 bg-purple-700 w-full flex flex-col gap-4"
    >
      {/* Input Form */}
      <div className="grid grid-cols-12 gap-x-4 gap-y-2">
        <div className="col-span-6 flex flex-col">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="rounded-md py-1 px-2"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="col-span-6 flex flex-col">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            className="rounded-md py-1 px-2"
            value={amount || ''}
            onChange={amountChangeHandler}
            step={0.01}
            min={0}
          />
        </div>
        <div className="col-span-6 flex flex-col">
          <label htmlFor="">Date</label>
          <input
            type="date"
            className="rounded-md py-1 px-2"
            value={date || ''}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-purple-950 text-white py-2 px-4"
        >
          Add Expense
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
