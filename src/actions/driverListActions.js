import uuid from 'uuid';
//Add_Drivers
export const addDrivers = ({description =  '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type:'ADD_DRIVERS',
    driverList:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove_Driver
export const removeDriver = ({id} = {}) => ({
    type:'REMOVE_DRIVER',
    id
});

//Edit_Expense
export const editDriver = (id, updates) => ({
    type:'EDIT_DRIVERS',
    id,
    updates
});