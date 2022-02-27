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
// setInterval(next, 3000);
var pro = document.querySelectorAll('.a2');
for (var i = 0; i < pro.length; i++) {
    pro[i].addEventListener('click', function () {
        window.location = "healthcareinner.html"
    })
}

document.querySelector("#mainlogo").addEventListener("click", function () {
    window.location = "index.html"
})