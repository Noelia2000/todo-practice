import { JSX, useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./Footer"

const mockTodos = [
  {
    id: '1',
    title:'prueba 1',
    completed: true,
    
  },
  {
    id:'2',
    title: 'Aprender React con TypeScript',
    completed: false,
  },
  {
    id:'3',
    title: 'todo 3',
    completed: false,
  }
]
const App =(): JSX.Element =>{
  const [todos, setTodos]=useState(mockTodos)
  const [filterSelected, setFiltersSelected]= useState<FilterValue>( TODO_FILTERS.ALL)
  const handleRemove= ({ id }: TodoId): void=>{
    const newTodos = todos.filter(todo => todo.id !== id )
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed } :Pick<TodoType, 'id' | 'completed'>
  ): void=>{
    const newTodos= todos.map(todo=>{
      if (todo.id == id){
        return{
          ...todo,
          completed

        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const handleFilterChange= (filter:FilterValue):void=>{
    setFiltersSelected(filter)

  }
  const activeCount= todos.filter(todo=>!todo.completed).length
  const completedCount= todos.length-activeCount
  return(
  <div className="todoapp">
  <Todos
  onToggleCompleteTodo={handleCompleted}
  onRemoveTodo={handleRemove}
   todos={todos}
   />
   <Footer
   activeCount={activeCount}
   completedCount={completedCount}
   filterSelected={filterSelected}
   onClearCompleted={()=>{}}
   handleFilterChange={handleFilterChange}
   />
  </div>
)
}
export default App
