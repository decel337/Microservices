const updateParking = async (id, name, owner) => {
    return {parking_id: id,
        name: name,
        owner: owner};
};

module.exports = updateParking;
