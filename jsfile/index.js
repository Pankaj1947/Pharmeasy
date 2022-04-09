

var item = 1
document.querySelector("#prevbtn").addEventListener('click', prev)
document.querySelector("#nextbtn").addEventListener('click', next)


function prev() {
    var items = document.querySelectorAll("#items > img");
    if (item == 1) {
        item = items.length
    } else {
        item--
    }
    runslider()
}

function next() {
    var items = document.querySelectorAll("#items > img");
    if (item == items.length) {
        item = 1
    } else {
        item++
    }
    runslider()
}
function runslider() {
    var items = document.querySelectorAll("#items > img");
    for (var i = 0; i < items.length; i++) {
        if (i + 1 == item) {
            items[i].style.display = "block"
        } else {
            items[i].style.display = "none";
        }
    }

}
runslider()
setInterval(next, 3000);

document.querySelector("#loginbtn").addEventListener("click", showlogin)

function showlogin() {
    document.querySelector("#loginpage").style.display = "block";
    // document.querySelector('body').style.opacity = "0.3";
    document.querySelector("#loginpage").style.opacity = "1";

}
document.querySelector("#closebtn").addEventListener("click", hidelogin)

function hidelogin() {
    document.querySelector("#loginpage").style.display = "none";
    document.querySelector('body').style.opacity = "1";

}

document.querySelector("#loginform").addEventListener("submit", function () {
    event.preventDefault()
    var phnnumber = loginform.loginphone.value;
    // console.log('number:', typeof(phnnumber))
    if (phnnumber.length == 10) {
        document.querySelector("#loginbottom").innerHTML = "";
        var para = document.createElement("p")
        para.innerText = "Enter OTP sent to +91 " + phnnumber;
        var otpinput = document.createElement("input");
        otpinput.setAttribute("type", "number");
        otpinput.setAttribute('placeholder', "Enter OTP here")
        var btn = document.createElement("input");
        btn.setAttribute('type', 'submit');
        btn.setAttribute('value', "CONTINUE");
        btn.style.backgroundColor = "#10847e";
        btn.style.color = "white"
        var paralast = document.createElement('p');
        var error = document.createElement('p');
        error.style.color = "red"

        paralast.innerText = "By clicking continue, you agree with our Privacy Policy"
        btn.addEventListener('click', function () {
            otpconfirm(otpinput.value, error)
        })

        document.querySelector("#loginbottom").append(para, otpinput, error, btn, paralast);

    } else {
        document.querySelector("#errormsg").innerText = "Enter a valid mobile number"
        document.querySelector("#errormsg").style.color = "red";
    }


})
function otpconfirm(v, error) {
    // console.log(v)
    if (v == "1234") {
        document.querySelector("#loginpage").style.display = "none";
        document.querySelector("#loginbtn").innerText = "Sachin Smp"
    } else {
        error.innerText = "The code entered is incorrect."
    }
}
document.querySelector("#cartdiv").addEventListener("click", function () {
    window.location="cart.html"
})


var reviewController = document.querySelectorAll(".reviewController");
var reviewPics = document.getElementsByClassName("R");
var r = 0;
reviewController[1].onclick = () => {
  r++;
  for (var i of reviewPics) {
    if (r == 0) {
      i.style.left = "0px";
    }
    if (r == 1) {
      i.style.left = "-740px";
    }
    if (r == 2) {
      i.style.left = "-1480px";
    }
    if (r == 3) {
      i.style.left = "-2220px";
    }
    if (r == 4) {
      i.style.left = "-2960px";
    }
    if (r > 4) {
      r = 4;
    }
  }
};
reviewController[0].onclick = () => {
  r--;
  for (var i of reviewPics) {
    if (r == 0) {
      i.style.left = "0px";
    }
    if (r == 1) {
      i.style.left = "-740px";
    }
    if (r == 2) {
      i.style.left = "-1480px";
    }
    if (r == 3) {
      i.style.left = "-2220px";
    }
    if (r < 0) {
      r = 0;
    }
  }
};