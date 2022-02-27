
var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(cartData)

var cartvalue = cartData.reduce(function (acc, item) {
    return acc + item.price


}, 0)
var strikedtotal = cartData.reduce(function (acc, item) {
    return acc + item.strikedOffprice
}, 0)

// document.querySelector("#itemstrikedoff").innerText = 
document.querySelector("#itemrealPrice").innerText =
    // document.querySelector("#deliverystrikedOff").innerText = 
    // document.querySelector("#deliveryrealprice").innerText = 
    document.querySelector("#totalprice").innerText =
    document.querySelector("#totalSavings").innerText = "Total Savings of" + +"on this order"



document.querySelector("#submit").addEventListener("click", submitFun);
function submitFun() {
    if (
        document.querySelector("#cardNumber").value.length == 16 &&
        document.querySelector("#cvv").value.length == 3
    ) {
        // document.querySelector(".popupMsg").innerHTML = "";

        console.log("someone clicked");
        document.querySelector("#cardbox").innerHTML = ""
        document.querySelector("#otpwala").style.display = "block"
        
    } else {
        document.querySelector(".popupMsg").innerHTML = "Enter valid details";
        document.querySelector("#submit").style.background = "#959595";
    }
}
document.querySelector("#cardNumber").addEventListener("mouseenter", paybuttoncolor);

function paybuttoncolor() {
    document.querySelector("#submit").style.background = "#10847e";
}




document.querySelector("#crdit").addEventListener("click", function () {
    document.querySelector("#cardbox").style.display="block"
});

// document.querySelector("#input").addEventListener("click", submitFun);
// function submitFun() {
//     // window.location = otppage.html;
//     console.log("hello")



// }
document.querySelector("#button1020").addEventListener('click', function () {
    window.location="sucess.html"
})

