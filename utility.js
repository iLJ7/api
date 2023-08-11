function closeApp() {
    console.log('hi')
    window.close()
}

async function example() {

    console.log('Example request detected.')

    await fetch("https://54.216.247.155/auth/example", {method: 'GET', credentials: 'include', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
}
async function login() {
    console.log('Login request detected.')

    var body = {username: username_text.value, password: password_text.value}

    await fetch("https://54.216.247.155/auth/login", {method: 'POST', credentials: 'include', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(body)})
        .then((response) => response.json())
        .then((json) => console.log(json));
    
}

async function getReports() {
    console.log('getReports request detected.')

    var body = {username: "Luke", password: "Glenmore123!"}

    await fetch("https://54.216.247.155/auth/getAllReports", {method: 'GET', credentials: 'include', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
        .then((response) => response.json())
        .then((json) => console.log(json))
}

x = document.getElementById("close-btn")
loginButton = document.getElementById("login-btn")
sendButton = document.getElementById("send-btn")
username_text = document.getElementById("uname")
password_text = document.getElementById("pass")

x.addEventListener("click", closeApp)
loginButton.addEventListener("click", example)
// sendButton.addEventListener("click", getReports)