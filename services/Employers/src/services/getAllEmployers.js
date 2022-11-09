'use strict';

const getAllEmployers = async () => {
    const employers = [
        {
            employer_id: '12',
            name: 'Bohdan',
            post: 'Manager'
        },
        {
            employer_id: '23',
            name: 'Anatolii',
            post: 'Cleaner'
        },
        {
            employer_id: '13',
            name: 'Vladislav',
            post: 'Administrator'
        },
    ];
    return employers;
};

module.exports = getAllEmployers;
