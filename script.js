function openWeek(weekNumber) {

    // Hide all weeks
    const weeks = document.querySelectorAll(".week-page");

    weeks.forEach(function(week) {
        week.classList.remove("active-page");
    });


    // Show selected week
    const selectedWeek =
        document.getElementById("week" + weekNumber);

    selectedWeek.classList.add("active-page");


    // Change active sidebar button
    const buttons =
        document.querySelectorAll(".week-btn");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    buttons[weekNumber - 1].classList.add("active");


    // Scroll to content
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSolution(weekNumber) {

    const solution =
        document.getElementById("solution" + weekNumber);

    solution.classList.toggle("show");


    const button =
        solution.previousElementSibling;

    if (solution.classList.contains("show")) {

        button.innerText = "Hide Solution";

        setTimeout(function() {

            solution.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    } else {

        button.innerText = "View Solution";

    }
}


/* Small mouse movement effect */

document.addEventListener("mousemove", function(event) {

    const bubbles =
        document.querySelectorAll(".background span");

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;


    bubbles.forEach(function(bubble, index) {

        bubble.style.transform =
            `translate(${x * (index + 1) / 4}px,
                       ${y * (index + 1) / 4}px)`;

    });

});
