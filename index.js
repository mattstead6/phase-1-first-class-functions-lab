
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(-2)

//WHY DOES THIS NOT WORK!!!!!
// const selectingDrivers = () => {
//     return [returnFirstTwoDrivers, returnLastTwoDrivers]};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(value) {
        return integer*value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, driversToReturn){
    return driversToReturn(drivers);
}