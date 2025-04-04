 add-buttons-at-the-bottom
import { TODO_FILTERS } from "./consts"

=======
master
export interface Todo {
    id: string
    title: string
    completed: boolean
}
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted =Pick<Todo, 'completed'>
 add-buttons-at-the-bottom
export type ListOfTodos= Todo[]

export  type FilterValue =typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
=======
export type ListOfTodos= Todo[]
 master
