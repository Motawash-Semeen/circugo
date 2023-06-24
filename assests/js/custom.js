// Get the tab buttons
const tabButtons = document.querySelectorAll('.nav-link');

// Get the tab panes
const tabPanes = document.querySelectorAll('.tab-pane-text');

// Add click event listener to each tab button
tabButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove 'show' class from all tab panes
        tabPanes.forEach((pane) => {
            pane.classList.remove('show');
            pane.classList.remove('active');
        });

        // Get the target pane ID based on the button's data-bs-target attribute
        const targetPaneId = button.getAttribute('data-bs-target') + "-text";
        // Add 'show' class to the target tab pane
        document.querySelector(targetPaneId).classList.add('show');
        document.querySelector(targetPaneId).classList.add('active');

    });
});

const switchToggle = document.getElementById("switch-toggle");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content11 = document.getElementById("content11");
const content22 = document.getElementById("content22");
const content15 = document.getElementById("content15");
const content25 = document.getElementById("content25");

switchToggle.addEventListener("change", function() {
    if (this.checked) {
        content1.classList.remove("active");
        content2.classList.add("active");
        content11.classList.remove("active-head");
        content22.classList.add("active-head");
        content15.classList.remove("active");
        content25.classList.add("active");
    } else {
        content1.classList.add("active");
        content2.classList.remove("active");
        content11.classList.add("active-head");
        content22.classList.remove("active-head");
        content15.classList.add("active");
        content25.classList.remove("active");
    }
});

$(document).ready(function() {
    $("#plan-add-flip").click(function() {
        $("#plan-add-panel").slideToggle("slow", function() {
            // After slideToggle animation completes
            if ($("#plan-add-panel").css("display") === "block") {
                // When plan-add-panel is visible
                $("#plan-add-flip").empty().html("Hide Add-ons <img src='./assests/images/Dropdown_Up_Arrow.svg' alt=''>");
                //$("#plan-add-flip img").attr("src", "./assests/images/Dropdown_Up_Arrow.svg");
            } else {
                // When plan-add-panel is hidden
                $("#plan-add-flip").empty().html("Show Add-ons <img src='./assests/images/Dropdown_Down_Arrow.svg' alt=''>");
                //$("#plan-add-flip img").attr("src", "./assests/images/Dropdown_Down_Arrow.svg");
            }
        });
    });
});