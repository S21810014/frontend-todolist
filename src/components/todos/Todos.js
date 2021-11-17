import React, { useReducer, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import TodosReducer from '../../reducer/TodosReducer'
import TodosItem from './TodosItem'

function Todos() {
    const [todos, todosDispatch] = useReducer(TodosReducer, [])
    const [todoInput, setTodoInput] = useState('')

    const btnAddTodoOnClick = () => {
        if(todoInput.length < 1) return

        todosDispatch({type:'add-todo', payload: {text: todoInput}})
        setTodoInput('')
    }

    return (
        <div>
            <Card style={{
                margin: '3em 15em 1em 15em',
                padding: '1.25em',
                filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.25))',
                wordBreak: 'unset',
                wordWrap: 'unset',
            }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Form.Control
                        style={{
                            flexGrow: 1,
                            marginRight: '1em'
                        }}
                        type='text' 
                        placeholder='Add an item...' 
                        value={todoInput} 
                        onChange={e => setTodoInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && btnAddTodoOnClick()}
                    />
                    <Button onClick={btnAddTodoOnClick}>Add</Button>
                </div>

                <Card style={{marginTop: '1em', overflowX: 'hidden'}}>
                    {todos.map(el => <TodosItem key={el.id} todoItem={el} todosDispatch={todosDispatch}/>)}
                </Card>
            </Card>
        </div>
    )
}

export default Todos
