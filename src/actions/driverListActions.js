import database from '../firebase/firebase';
//Add_Drivers
export const addDrivers = (driverList) => ({
    type:'ADD_DRIVERS',
    driverList
});

export const startAddDriver = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const driverList = {description ,note,amount,createdAt};
        database.ref('driver').push(driverList).then((ref) => {
            dispatch(addDrivers({
                id:ref.key,
                ...driverList
            }));
        });

    };
};
//Remove_Driver
export const removeDriver = ({id} = {}) => ({
    type:'REMOVE_DRIVER',
    id
});

// set remove driver
export const setRemoveDriver = ({id} ={}) => {
    return (dispatch) => {
        return database.ref(`driver/${id}`).remove().then(() => {
            
             dispatch(removeDriver({id}));
            });
        };
};

//Edit_Expense
export const editDriver = (id, updates) => ({
    type:'EDIT_DRIVERS',
    id,
    updates
});

// set driver
export const setDriver = (driverList) => ({
    type: 'SET_DRIVER',
    driverList
});

// start set driver
export const startSetDriver = () => {
    return (dispatch) => {

        return database.ref('driver').once('value').then((snapshot) => {
            const driverList = [];

            snapshot.forEach((childSnapshot) => {

                 driverList.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setDriver(driverList))
        });
    }
};