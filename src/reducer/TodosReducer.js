//eslint-disable-next-line
export default (state, action) => {
    switch(action.type) {
        case 'add-todo': {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload.text,
                    completed: false,
                }
            ]
        }
        case 'change-status': {
            return state.map(el => {
                if(el.id === action.payload.id)
                    return {
                        ...el,
                        completed: !el.completed
                    }
                
                return el
            })
        }
        case 'delete': {
            const result = state.filter(el => el.id !== action.payload.id)

            if(result)
                return result
            else
                return []
        }
        default: {
            return "invalid action"
        }
    }
}