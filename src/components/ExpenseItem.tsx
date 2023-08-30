import { ExpenseProps } from '@/types'
import React from 'react'

type Props = {
  item: ExpenseProps
}

const ExpenseItem = (props: Props) => {
  const { item } = props
  return (
    <div className="rounded-md bg-gray-800 p-2 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="rounded-md p-2 items-center justify-center w-[80px] h-[80px] border flex flex-col border-white bg-black text-white text-center">
          <p className="leading-4 text-sm">{item.date.getMonth()+1}</p>
          <p className="leading-4 text-sm">{item.date.getFullYear()}</p>
          <p className="text-2xl font-bold">{item.date.getDate()}</p>
        </div>
        <h3 className="text-white font-bold text-2xl">{item.name}</h3>
      </div>

      <div className="rounded-md border border-white bg-purple-950 py-1 px-4">
        <p className="font-bold text-white text-2xl">${item.price}</p>
      </div>
    </div>
  )
}

export default ExpenseItem
