import { FILTERS_BUTTONS } from "./consts"
import { type FilterValue  } from "./types"
interface Props{
    onFilterChange:(filter: FilterValue)=>void
    filterSelected: FilterValue
}

export const Filters: React.FC<Props>=(
    {filterSelected, onFilterChange}
)=>{
    return(
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([Key,{href,literal}])=>{
                const isSelected = Key == filterSelected
                const className= isSelected?'selected':''
                return(
                    <li key={Key}>
                        <a
                        href={href}
                        className={className}
                        onClick={(event )=>{
                            event.preventDefault()
                            onFilterChange(Key as FilterValue)
                        }}
                        >
                            {literal}
                        </a>
                    </li>
                )
            })}
            
        </ul>

    )
}