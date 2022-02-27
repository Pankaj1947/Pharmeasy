var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
function showdata(coviddata) {
    document.querySelector("#showdatapage").innerHTML = ""
    coviddata.map(function (elem) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        img.src = elem.img;
        var name = document.createElement('p');
        name.innerText = elem.name;
        var strikeOffPrice = document.createElement('p');
        strikeOffPrice.innerText = "MRP ₹ " + elem.strikeOffPrice;
        strikeOffPrice.style.textDecoration = "line-through"
        // var discount = document.createElement('p');
        var price = document.createElement('p')
        price.innerText = "₹ " + elem.price;
        var btn = document.createElement('button');
        btn.innerText = "Add To Cart"
        btn.style.backgroundColor = "teal"
        btn.style.color = "white"
        btn.addEventListener('click', function () {
            addtocart(elem)
        })
        div.append(img, name, strikeOffPrice, price, btn)
        document.querySelector("#showdatapage").append(div);
    })
}
showdata(coviddata)
document.querySelector("#sortby").addEventListener("change", sorting)

function sorting() {
    var val = document.querySelector("#sortby").value;
    if (val == 'pop') {
        var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
        showdata(coviddata)
    }
    else if (val == "h2l") {
        var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
        var sorteddata = coviddata.sort(function (a, b) {
            return b.price - a.price
        })
        showdata(sorteddata)

    } else if (val == "l2h") {
        var coviddata = JSON.parse(localStorage.getItem("healthcaredata"));
        var sorteddata = coviddata.sort(function (a, b) {
            return a.price - b.price
        })
        showdata(sorteddata)
    }

}
var cartdata = JSON.parse(localStorage.getItem('cartdata')) || [];

function addtocart(elem) {
    elem.qty = 1;
    cartdata.push(elem);
    localStorage.setItem('cartdata', JSON.stringify(cartdata))
}

document.querySelector("#mainlogo").addEventListener("click", function () {
    window.location = "index.html"
})
function gotocart() {
    window.location = "cart.html"
}