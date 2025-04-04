import { JSX, useState } from "react"
import { Todos } from "./components/Todos" add-buttons-at-the-bottom
import { FilterValue, type TodoId, type Todo as TodoType } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./Footer"
import {  type TodoId, type Todo as TodoType } from "./types"
master

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
 add-buttons-at-the-bottom
  const [filterSelected, setFiltersSelected]= useState<FilterValue>( TODO_FILT

 master
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
add-buttons-at-the-bottom
  const handleFilterChange= (filter:FilterValue):void=>{
    setFiltersSelected(filter)

  }
  const activeCount= todos.filter(todo=>!todo.completed).length
  const completedCount= todos.length-activeCount
=======
 master
  return(
  <div className="todoapp">
  <Todos
  onToggleCompleteTodo={handleCompleted}
  onRemoveTodo={handleRemove}
add-buttons-at-the-bottom
   todos={todos}
   />
   <Footer
   activeCount={activeCount}
   completedCount={completedCount}
   filterSelected={filterSelected}
   onClearCompleted={()=>{}}
   handleFilterChange={handleFilterChange}
   />
=======
   todos={todos}/>
      master
  </div>
)
}
export default App
