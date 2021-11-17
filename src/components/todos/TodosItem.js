import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import './TodosItem.css'

function TodosItem({todoItem, todosDispatch}) {
    const [animationState, setAnimationState] = useState("0")

    return (
        <div className="todoItemCard" animation={animationState}>
            <Card style={{
                margin: '0.5em',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '1em 1.25em',
                // backgroundColor: 'red'
            }}>
                <Form.Check type='checkbox' checked={todoItem.completed} onChange={() => todosDispatch({type: 'change-status', payload: {id: todoItem.id}})}/>
                <p style={{
                    textDecoration: todoItem.completed ? 'line-through' : 'none', 
                    margin: 0,
                    marginLeft: '1em',
                    flexGrow: 1
                }}>
                    {todoItem.text}
                </p>
                <Button onClick={() => {
                    setAnimationState("1")

                    setTimeout(() => todosDispatch({type: 'delete', payload: {id: todoItem.id}}), 900)
                }}>Remove</Button>
            </Card>
        </div>
    )
}

export default TodosItem
