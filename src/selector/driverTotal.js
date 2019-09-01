export default (driverList) => {
    return driverList.map((driver) => driver.amount).reduce((sum, value) => sum + value, 0);
}