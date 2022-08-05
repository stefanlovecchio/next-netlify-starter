/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Stefan Lovecchio
 *      Student ID: 154725212
 *      Date:       Aug 04, 2022
 */

const box = document.getElementById("box");
//when the page loads, hide the box
box.style.display = "none";

function handleClick() {
    if (document.getElementById("hiring").checked) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

const radioBtn = document.querySelectorAll("input[type=radio]");
radioBtn.forEach((radio) => {
    radio.addEventListener("click", handleClick);
});
