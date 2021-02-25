let studentGrade = parseInt(window.prompt("What is you grade?"));
if (studentGrade >=1 && studentGrade <= 100) {
    if (studentGrade >= 90) {
        window.console.log("Congratulations! You received an A.");
    } else if (studentGrade >= 80 && studentGrade < 90) {
        window.console.log("You received a B.");
    } else if (studentGrade >= 70 && studentGrade < 80) {
        window.console.log("You received a C.");
    } else if (studentGrade >= 60 && studentGrade < 70) {
        window.console.log("You received a D.");
    } else {
            window.console.log("You received an F.");
    }    
} else {
    window.alert("Only numbers between 1 and 100 are accepted!");
}