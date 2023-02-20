let dropdown = document.getElementById("dropdown");
console.log(dropdown);

function showDropDownList() {
    dropdown.style.opacity = "1";
    dropdown.style.visibility = "visible";
}
function closeDropDownList() {
    dropdown.style.opacity = "0";
    dropdown.style.visibility = "hidden";
}