$("#btnSend").click(function () {
    var assScore = parseFloat($("#assScore").val());
    var gpScore = parseFloat($("#gpScore").val());
    var quizScore = parseFloat($("#quizScore").val());
    var examScore = parseFloat($("#examScore").val());
    var intexScore = parseFloat($("#intexScore").val());
    var finalScore = (assScore * .55) + (gpScore * .05) + (quizScore * .1) + (examScore * .2) + (intexScore * .1);
    if (finalScore >= 94.0) {
        var letterGrade = "A";
    } else if (finalScore >= 90.0) {
        var letterGrade = "A-";
    } else if (finalScore >= 87.0) {
        var letterGrade = "B+";
    } else if (finalScore >= 84.0) {
        var letterGrade = "B";
    } else if (finalScore >= 80.0) {
        var letterGrade = "B-";
    } else if (finalScore >= 77.0) {
        var letterGrade = "C+";
    } else if (finalScore >= 74.0) {
        var letterGrade = "C";
    } else if (finalScore >= 70.0) {
        var letterGrade = "C-";
    } else if (finalScore >= 67.0) {
        var letterGrade = "D+";
    } else if (finalScore >= 64.0) {
        var letterGrade = "D";
    } else if (finalScore >= 60.0) {
        var letterGrade = "D-";
    } else {
        var letterGrade = "E";
    }
    alert("Numeric Score: " + finalScore + "\nLetter Grade: " + letterGrade);
})