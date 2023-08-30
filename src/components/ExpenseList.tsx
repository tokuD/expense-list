'use client'
import React, { useState } from 'react'
import { ExpenseItem } from '.'
import { useExpenseList } from '@/providers'

type Props = {}

const yearsList = [2019, 2020, 2021, 2022, 2023]

const ExpenseList = (props: Props) => {
  const expenseList = useExpenseList()
  const [selectedYear, setSelectedYear] = useState<number>(2021)
  const filteredExpenseList = expenseList.filter(
    (item) => item.date.getFullYear() === selectedYear
  )

  const yearChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value))
  }

  return (
    <div className="bg-black text-white rounded-md p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <h2>Filter by year</h2>
        <select
          onChange={yearChangeHandler}
          className="select text-black"
        >
          {yearsList.map((year, ind) => (
            <option
              key={ind}
              selected={selectedYear === year}
              value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>

      {filteredExpenseList.map((item) => (
        <ExpenseItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default ExpenseList
