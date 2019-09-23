//Expense Reducer
const driverListReducerDefaultState = [];
 export const driverListReducer = (state = driverListReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_DRIVERS':
        return [...state, action.driverList]; // Array Spread Operator
        // state.concat(action.driverList);

        case 'REMOVE_DRIVER':
        return state.filter(({ id }) => id !== action.id );
        
        case 'EDIT_DRIVERS':
        return state.map((driverLists) => {
            if(driverLists.id === action.id) {
                return {
                    ...driverLists,
                    ...action.updates
                };

            } else {
                return driverLists;
            }
        });

        case 'SET_DRIVER':
        return action.driverList;

        default:
        return state;
    }
};
