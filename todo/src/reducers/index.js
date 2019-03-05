import { ADD_TASK, TOGGLE_TASK} from '../actions';

const initialState = {
    todos: []
}
  
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
          return [
                    ...state,
               {
                    id: action.id,
                    text: action.text,
                    completed: false
               }
          ];
        case TOGGLE_TASK:
          return state.map((task, index) => {
            if (index === action.index) {
              return [ 
                        ...state, 
                   {
                        completed: !task.completed
                   }
              ];
            }
            return task;
          });
        default:
          return state
      }
}

export default rootReducer;