//Get element
const body = document.body;
const loginHeader = document.getElementById("loginHeader");
const loginButton = document.getElementById("loginButton");
const container = document.getElementById("container");
const forgot = document.getElementById("forgot");

// style body
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.backgroundColor = "lightblue";
body.style.textAlign = "center";
body.style.padding = "150px";
body.style.margin = "100px";
body.style.fontFamily = "Arial, sans-serif";


document.getElementById("loginForm").onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple validation
    if (username === "" || password === "") {
        document.getElementById("message").innerText = "Please fill in all fields.";
        return;
    };

    // Simulate login success
    alert("Login successful!");
    // document.getElementById("message").innerText = "Login successful, you're been redirected...!";
    document.getElementById("message").innerHTML = "<b>You've gained access!</b>";

};

//login-header styling
loginHeader.style.background = "purple";
loginHeader.style.color = "white";
loginHeader.style.fontSize = "24px";
loginHeader.style.borderRadius = "5px";
loginHeader.style.padding = "10px 20px";

//login-button styling
loginButton.style.background = "purple";
loginButton.style.padding = "10px 20px";
loginButton.style.border = "2px solid purple";
loginButton.style.borderRadius = "5px";


loginButton.onmouseover = function (hovered) {
    loginButton.style.color = "lightblue";

};
loginButton.onmouseout = function (notHovered) {
    loginButton.style.color = "black";
};

//container style
container.style.borderBlock = "3px solid purple";
container.style.width = "500px";

//forgot password
forgot.style.color = "purple";

forgot.onmouseover = function (hovered) {
    forgot.style.color = "brown";
};
forgot.onmouseout = function (notHovered) {
    forgot.style.color = "purple"
};