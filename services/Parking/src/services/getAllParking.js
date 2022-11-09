'use strict';

const getAllParking = async () => {
    const parkings = [
        {
            parking_id: 12,
            name: 'Underground',
            owner: 'Government'
        },
        {
            parking_id: 23,
            name: 'Free parking',
            owner: '35236234'
        },
        {
            parking_id: 13,
            name: 'Parking for each',
            owner: 'Mazda'
        },
    ];
    return parkings;
};

module.exports = getAllParking;
