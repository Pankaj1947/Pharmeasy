
var cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
//console.log(cartdata);

document.querySelector("#orderSummary").innerText = "Order Summary";

var total = cartdata.reduce(function (acc, item, index, array) {
    return acc + item.price;

}, 0);
var newtotal = total.toFixed(1)
// 
document.querySelector("#cartValue").innerText = "Cart Value: " + "  " + newtotal;
console.log(total);

var chrg = 30;
document.querySelector("#dlyCharge").innerText = "Delivery Charge: " + "  " + chrg;

document.querySelector("#amount").innerText = "Amount to be paid: " + "  " + Number(newtotal + chrg);



displayData(cartdata);

function displayData(cartdata) {
    document.querySelector("#leftDiv").innerHTML = "";
    console.log(cartdata);

    cartdata.map(function (item, index, array) {

        var imgcomDiv = document.createElement("div");
        imgcomDiv.setAttribute("id", "imgcomDiv");

        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "imgDiv");
        var itemImg = document.createElement("img");
        itemImg.setAttribute("src", item.img);
        itemImg.setAttribute("id", "itemImg");
        imgDiv.append(itemImg);

        var compDiv = document.createElement("div");
        compDiv.setAttribute("id", "compDiv");

        var nameDelDiv = document.createElement("div");
        nameDelDiv.setAttribute("id", "nameDelDiv");

        var itemName = document.createElement("div");
        itemName.setAttribute("id", "itemName");
        itemName.innerText = item.name;

        var delBtn = document.createElement("div");
        delBtn.setAttribute("id", "delBtn");
        delBtn.innerText = "Remove";
        delBtn.addEventListener("click", function () {
            removeData(item, index);
        });

        nameDelDiv.append(itemName, delBtn);

        var itemStrikedPrice = document.createElement("p");
        itemStrikedPrice.innerText = item.strikeOffPrice;
        itemStrikedPrice.setAttribute("id", "itemStrikedPrice");

        var itemPrice = document.createElement("p");
        itemPrice.innerText = item.price * item.qty;
        itemPrice.setAttribute("id", "itemPrice");

        var qtybtn = document.createElement("button");
        qtybtn.setAttribute("id", "btn");

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv");

        var btnTextDiv = document.createElement("div");
        btnTextDiv.setAttribute("id", "btnTextDiv");
        btnTextDiv.innerText = "Qty";

        var dropdownDiv = document.createElement("div");
        dropdownDiv.setAttribute("id", "dropdownDiv");

        var btnSelect = document.createElement("select");
        btnSelect.setAttribute("id", "btnSelect");

        for (var i = 1; i < 8; i++) {
            var btnOption = document.createElement("option");
            btnOption.setAttribute("value", i);
            var t = document.createTextNode(i);
            btnOption.appendChild(t);
            btnSelect.append(btnOption);
        }

        btnSelect.addEventListener("change", function () {
            item.qty = btnSelect.value;

            localStorage.setItem("cartdata", JSON.stringify(cartdata));
            //dropdownDiv.value = item.qty;
            displayData(cartdata);

        })

        dropdownDiv.append(btnSelect);
        innerDiv.append(btnTextDiv, dropdownDiv);
        qtybtn.append(innerDiv);

        var expressdly = document.createElement("div");
        expressdly.setAttribute("id", "expressdly");
        expressdly.innerHTML = "Express Delivery <span>Today, before 8 pm</span>";

        compDiv.append(nameDelDiv, itemStrikedPrice, itemPrice, qtybtn, expressdly);

        imgcomDiv.append(imgDiv, compDiv);

        document.querySelector("#leftDiv").append(imgcomDiv);

    });
}

function removeData(item, index) {
    //console.log(item);
    cartdata.splice(index, 1);
    localStorage.setItem("cartdata", JSON.stringify(cartdata));
    displayData(cartdata);


    var total = cartdata.reduce(function (acc, item, index, array) {
        return acc + item.price;

    }, 0);
    var newtotal = total.toFixed(1)
    document.querySelector("#cartValue").innerText = "Cart Value: " + "  " + newtotal;
    console.log(total);

    // var chrg = 30;
    document.querySelector("#dlyCharge").innerText = "Delivery Charge: " + "  " + chrg;

    document.querySelector("#amount").innerText = "Amount to be paid: " + " " + Number(newtotal + chrg);

}

document.querySelector("#mainlogo").addEventListener("click", function () {
    window.location = "index.html"
})

document.querySelector("#showadd").addEventListener("click", function () {
    document.querySelector("#address").style.display = "block"
})
document.querySelector("#addsub").addEventListener("click", function () {
    document.querySelector("#address").style.display = "none";
    document.querySelector("#showadd").innerText = "Proceed to Buy"
    window.location = "payment.html"
})