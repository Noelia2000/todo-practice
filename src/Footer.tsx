import { Filters } from "./Filters"
import { FilterValue } from "./types"
interface Props{
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: ()=> void
    handleFilterChange:(filter: FilterValue)=> void
}
export const Footer: React.FC<Props>=({ 
    activeCount= 0, 
    completedCount= 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted
    })=>{
    return(
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeCount}</strong> tareas pendientes 
            </span>
          <Filters
          filterSelected ={filterSelected}
          onFilterChange={handleFilterChange}
          />
        </footer>
    )
}