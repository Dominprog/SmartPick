var qtyBoxes = document.querySelectorAll(".qty-row");
qtyBoxes.forEach(function (box) {
    var btns = box.querySelectorAll(".qty-btn");
    var value = box.querySelector("span");
    if (btns.length < 2 || !value) return;
    var minus = btns[0];
    var plus = btns[1];
    minus.addEventListener("click", function () {
        var current = parseInt(value.textContent, 10);
        if (current > 1) value.textContent = current - 1;
    });
    plus.addEventListener("click", function () {
        var current = parseInt(value.textContent, 10);
        value.textContent = current + 1;
    });
});