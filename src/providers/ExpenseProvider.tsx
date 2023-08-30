'use client'
import { ExpenseProps } from '@/types'
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const initExpenseList: ExpenseProps[] = [
  {
    id: '0',
    date: new Date('2020-7-14'),
    name: 'Toilet Paper',
    price: 94.12,
  },
  {
    id: '1',
    date: new Date('2021-3-12'),
    name: 'New TV',
    price: 799.49,
  },
  {
    id: '2',
    date: new Date('2021-3-28'),
    name: 'Car Insurance',
    price: 294.67,
  },
  {
    id: '3',
    date: new Date('2021-6-12'),
    name: 'New Desk (Wooden)',
    price: 450,
  },
]

const ExpenseValueContext = createContext<ExpenseProps[]>(initExpenseList)

const ExpenseSetContext = createContext<
  Dispatch<SetStateAction<ExpenseProps[]>>
>(() => {})

const ExpenseValuePrvider = (props: {
  children: React.ReactNode
  value: ExpenseProps[]
}) => {
  const { value, children } = props
  return (
    <ExpenseValueContext.Provider value={value}>
      {children}
    </ExpenseValueContext.Provider>
  )
}

const ExpenseSetProvider = (props: {
  children: React.ReactNode
  value: Dispatch<SetStateAction<ExpenseProps[]>>
}) => {
  const { children, value } = props
  return (
    <ExpenseSetContext.Provider value={value}>
      {children}
    </ExpenseSetContext.Provider>
  )
}

export const ExpenseProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [expenseList, setExpenseList] =
    useState<ExpenseProps[]>(initExpenseList)
  return (
    <ExpenseValuePrvider value={expenseList}>
      <ExpenseSetProvider value={setExpenseList}>{children}</ExpenseSetProvider>
    </ExpenseValuePrvider>
  )
}

export const useExpense = () => {
  const expenseList = useContext(ExpenseValueContext)
  const setExpenseList = useContext(ExpenseSetContext)
  return [expenseList, setExpenseList]
}

export const useExpenseList = () => useContext(ExpenseValueContext)

export const useSetExpenseList = () => useContext(ExpenseSetContext)
