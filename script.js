document.addEventListener("DOMContentLoaded", function () {

    const titles = [
        "Cybersecurity Consultant",
        "Ethical Hacker",
        "SOC Analyst",
        "GRC Professional",
        "Penetration Tester",
        "Information Security Analyst"
    ];

    const typingText = document.getElementById("typing-text");

    let currentIndex = 0;

    function changeTitle() {

        currentIndex++;

        if(currentIndex >= titles.length){
            currentIndex = 0;
        }

        typingText.textContent = titles[currentIndex];

    }

    setInterval(changeTitle, 2500);

});