var tabletData = JSON.parse(localStorage.getItem("tabletData"))

function searchdata() {
    console.log(event);
    if (event.key == "Enter") {
        document.querySelector("#showtablet").innerHTML = "";
        var searchvalue = document.querySelector("#searchvalue").value;
        var searchdata = tabletData.filter(function (ele) {
            return ele.name.includes(searchvalue);

        });
        searchdata.map(function (ele) {

            var div = document.createElement("div");
            div.setAttribute("id", "div1")
            var img = document.createElement("img");
            img.src = ele.img;
            img.setAttribute("id", "tabletimg");
            var name = document.createElement("p");
            name.innerText = ele.name;
            name.setAttribute("id", "tabletname");
            var div1 = document.createElement("div");
            div1.setAttribute("id", "tabletdiv");
            var price = document.createElement("p");
            price.innerText = ele.price;
            price.setAttribute("id", "tabletprice");
            var strikeprice = document.createElement("p");
            strikeprice.innerText = ele.strikeOffPrice;
            strikeprice.setAttribute("id", "tabletstrike");

            var button = document.createElement("button");
            button.innerText = "Add to Cart"
            button.setAttribute("id", "tabletbutton");
            button.addEventListener('click', function () {
                addtocart(ele)
            })
            div.append(img, name,);
            div1.append(price, strikeprice, button)
            document.querySelector("#showtablet").append(div, div1);

        })
    }
}
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
    runslider();
}

function next() {
    var items = document.querySelectorAll("#items > img");
    if (item == items.length) {
        item = 1
    } else {
        item++
    }
    runslider();
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
runslider();
var cartdata = JSON.parse(localStorage.getItem('cartdata')) || [];

function addtocart(elem) {
    elem.qty = 1;
    cartdata.push(elem);
    localStorage.setItem('cartdata', JSON.stringify(cartdata))
}
document.querySelector("#shravannhome").addEventListener("click", function () {
    window.location="index.html"
})

document.querySelector("#mainlogo").addEventListener("click", function () {
    window.location = "index.html"
})

function gotocart() {
    window.location="cart.html"
}