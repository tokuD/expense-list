'use client'
import React from 'react'
import ReactECharts from 'echarts-for-react'
import { barChartOption } from './option'
import { ExpenseProps } from '@/types'

type Props = {
  expenseList: ExpenseProps[]
}

const BarChart = (props: Props) => {
  const { expenseList } = props

  const monthlyAmounts = [...Array(12)].map(() => 0)

  expenseList.forEach((expense) => {
    const month = expense.date.getMonth()
    monthlyAmounts[month] += expense.price
  })

  return (
    <div>
      <ReactECharts option={barChartOption(monthlyAmounts)} />
    </div>
  )
}

export default BarChart
