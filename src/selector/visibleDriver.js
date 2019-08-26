// Visible Driver
import moment from 'moment';

export const visibleDriver = (driverList, {text, sortBy, startDate, endDate}) => {
    return driverList.filter((driverLists) => {
        const createdAtMoment = moment(driverLists.createdAt)
        // const startDateMatch =  typeof startDate !== 'number' || driverLists.createdAt >= startDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = driverLists.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};