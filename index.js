// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object){
        const p = document.createElement("p");
        p.innerHTML = object.id;
        document.body.appendChild(p);
        console.log(object);
    })
    .catch(function(error) {
        const header = document.createElement("header");
        header.innerHTML = error.message;
        document.body.appendChild(header);
        console.log(error.message);
      });
};
