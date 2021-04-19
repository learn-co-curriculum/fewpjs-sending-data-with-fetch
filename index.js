// Add your code here
const users = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })
};
const body = document.querySelector('body');
function submitData(){
return fetch('http://localhost:3000/users', users)
.then(resp => resp.json())
.then((data) => {
    body.innerHTML = data.id
})
.catch(error => {
    alert('Unauthorized Access');
    console.log(error);
    body.innerHTML = error.message
})
}

