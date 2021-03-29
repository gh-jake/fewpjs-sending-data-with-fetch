// // Add your code here
// const formData = {
//     dogName: "Byron" ,
//     dogBreed: "Poodle"
// };

// const configurationObject = {
//     // method: "POST" ,
//     headers: {
//         "Content-Type": "application/json" ,
//         "Accept": "application/json"
//     } ,
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs" , configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

const formData = {
    name: "Steve" ,
    email: "steve@steve.com"
}

function submitData() {
    return fetch("http://localhost:3000/users" , {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json" ,
            "Accept": "application/json"
        } ,
        body: JSON.stringify(formData)
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = object.id;
        document.body.appendChild(newDiv);
    })
    .catch(function(error) {
        const errorDiv = document.createElement("div");
        errorDiv.innerHTML = error.message;
        document.body.appendChild(errorDiv);
    });
}