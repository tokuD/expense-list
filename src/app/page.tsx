import { ExpenseForm, ExpenseList } from '@/components'
import { ExpenseProvider } from '@/providers'

export default function Home() {
  return (
    <ExpenseProvider>
      <main className="max-w-5xl w-full p-4 mx-auto space-y-8">
        <ExpenseForm />
        <ExpenseList />
      </main>
    </ExpenseProvider>
  )
}
