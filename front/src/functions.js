//Employers
document.getElementById("ButtonEmployersGet").addEventListener("click", GetEmployers);
document.getElementById("ButtonEmployersAdd").addEventListener("click", AddEmployers);
document.getElementById("ButtonEmployersDelete").addEventListener("click", DeleteEmployers);
document.getElementById("ButtonEmployersUpdate").addEventListener("click", UpdateEmployers);
//Parking
document.getElementById("ButtonParkingGet").addEventListener("click", GetParking);
document.getElementById("ButtonParkingAdd").addEventListener("click", AddParking);
document.getElementById("ButtonParkingDelete").addEventListener("click", DeleteParking);
document.getElementById("ButtonParkingUpdate").addEventListener("click", UpdateParking);
//Rooms
document.getElementById("ButtonRoomsGet").addEventListener("click", GetRooms);
document.getElementById("ButtonRoomsAdd").addEventListener("click", AddRooms);
document.getElementById("ButtonRoomsDelete").addEventListener("click", DeleteRooms);
document.getElementById("ButtonRoomsUpdate").addEventListener("click", UpdateRooms);

const connect = 'http://localhost:8080/api/v1/'

//------------------------EMPLOYERS-----------------------

async function GetEmployers(e) {
    e.preventDefault()
    console.log("??")
    var output = document.getElementById("outputGet")

    fetch(connect+'employers', {
        method: 'GET'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function AddEmployers(e) {
    e.preventDefault()

    var output = document.getElementById("outputAdd")
    var post = document.getElementById("postAdd").value
    var name = document.getElementById("nameAdd").value

    fetch(connect+'employers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            post: post
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function DeleteEmployers(e) {
    e.preventDefault()
    var output = document.getElementById("outputDelete")
    var id = document.getElementById("idDelete").value

    fetch(connect+`employers/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function UpdateEmployers(e) {
    e.preventDefault()
    var output = document.getElementById("outputUpdate")
    var id = document.getElementById("idUpdate").value
    var name = document.getElementById("nameUpdate").value
    var post = document.getElementById("postUpdate").value

    fetch(connect+`employers/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            post: post
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

//------------------------PARKING-----------------------

async function GetParking(e) {
    e.preventDefault()
    var output = document.getElementById("outputGetPark")

    fetch(connect+'parking', {
        method: 'GET'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function AddParking(e) {
    e.preventDefault()

    var output = document.getElementById("outputAddPark")
    var owner = document.getElementById("ownerAddPark").value
    var name = document.getElementById("nameAddPark").value

    fetch(connect+'parking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            owner: owner
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function DeleteParking(e) {
    e.preventDefault()
    var output = document.getElementById("outputDeletePark")
    var id = document.getElementById("idDeletePark").value

    fetch(connect+`parking/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function UpdateParking(e) {
    e.preventDefault()
    var output = document.getElementById("outputUpdatePark")
    var id = document.getElementById("idUpdatePark").value
    var name = document.getElementById("nameUpdatePark").value
    var owner = document.getElementById("ownerUpdatePark").value

    fetch(connect+`parking/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            name: name,
            owner: owner
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

//------------------------ROOMS-----------------------

async function GetRooms(e) {
    e.preventDefault()
    var output = document.getElementById("outputGetRooms")

    fetch(connect+'rooms', {
        method: 'GET'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function AddRooms(e) {
    e.preventDefault()

    var output = document.getElementById("outputAddRooms")
    var level = document.getElementById("levelAddRooms").value
    var busy = document.getElementById("busyAddRooms").value

    fetch(connect+'rooms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            level: level,
            busy: busy
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function DeleteRooms(e) {
    e.preventDefault()
    var output = document.getElementById("outputDeleteRooms")
    var id = document.getElementById("idDeleteRooms").value

    fetch(connect+`rooms/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}

async function UpdateRooms(e) {
    e.preventDefault()
    var output = document.getElementById("outputUpdateRooms")
    var id = document.getElementById("idUpdateRooms").value
    var level = document.getElementById("levelUpdateRooms").value
    var busy = document.getElementById("busyUpdateRooms").value

    fetch(connect+`rooms/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            level: level,
            busy: busy
        })
    })
        .then(response => response.json().then(data=>
        {
            output.innerText = JSON.stringify(data)
        }))
}
