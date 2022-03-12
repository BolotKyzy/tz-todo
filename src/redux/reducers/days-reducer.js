
const initialState =  []
const DaysReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return action.payload;

        case 'ADD_NEW_TASK':
            const newList = state.map(item => {
                if (item.id === action.payload[0]) {
                    item.tasks = [...item.tasks, action.payload[1]];
                }
                return item;
            });
            return newList;
        case 'DELETE_THE_TASK' :
            const deletedList = state.map(list => {
                if(list.id === action.payload[0].id) {
                    const newTasks = list.tasks.filter(t => t.id !== action.payload[1].id);
                    list.tasks = newTasks;

                }
                return list;
            } )
            return deletedList;
        case 'TO_COMPLETE_TASK':
            const newCompList = state.map(list => {
                if (list.id === action.payload[0]) {
                    list.tasks = list.tasks.map(task => {
                        if (task.id === action.payload[1]) {
                            task.completed = action.payload[2];
                        }
                        return task;
                    });
                }
                return list;
            });
            return newCompList;
        case 'EDIT_TASK':
          const newEditList = state.map(list => {
                if (list.id === action.payload[0][0]) {
                    list.tasks = list.tasks.map(task => {
                        if (task.id === action.payload[0][1].id) {
                            task.text = action.payload[1];
                        }
                        return task;
                    });
                }
                return list;
            });
            return newEditList;

        default:
            return state;
    }



}
export default DaysReducer;