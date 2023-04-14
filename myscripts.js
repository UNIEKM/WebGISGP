// JavaScript/Menu icon toggle/Menu will appear/disappear on click with .active class in @media section
// Inspired by: W3S https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// Owner: Kevin VD
// Date: Nov 23 (v1)

// jQuery drop menu
$(document).ready(function () {
  // Hover over .list_item to drop the submenu
  $('.list_item').hover(function () {
      // Slide down the submenu items
      $(this).children('.sub_drop').slideDown(250);
  },
  function () {
      // Slide up the submenu items
      $(this).children('.sub_drop').slideUp(250);
  });
});

//JavaScript for menu toggle & top button

//Validator doesn't like the 'const.' as it is used before it is declared, suggesting I 'use strict';
//But it works so too bad.

// Menu icon toggle
const toggleButton = document.getElementById('MenuIcon');
const NavBarList = document.getElementById('NavList');
toggleButton.addEventListener('click', function () {
  NavBarList.classList.toggle('active');
});

// Scroll to top button
// Credit: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let mybutton = document.getElementById("TopBtn");

// Show the button when the user scrolls down 150px from the top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      mybutton.style.display = "flex";
  } else {
      mybutton.style.display = "none";
  }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


//Solutions boostrap table
document.addEventListener("DOMContentLoaded", function () {
  const getCellValue = (tr, idx) =>
    tr.children[idx].innerText || tr.children[idx].textContent;

  const comparer = (idx, asc) => (a, b) =>
    ((v1, v2) =>
      v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
        ? v1 - v2
        : v1.toString().localeCompare(v2))(
      getCellValue(asc ? a : b, idx),
      getCellValue(asc ? b : a, idx)
    );

  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const table = th.closest("table");
      const tbody = table.querySelector("tbody");
      Array.from(tbody.querySelectorAll("tr"))
        .sort(
          comparer(
            Array.from(th.parentNode.children).indexOf(th),
            (this.asc = !this.asc)
          )
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );
});

