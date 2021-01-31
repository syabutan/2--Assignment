$('#submit').click(function () {

    //Take percentage for each grade category from input and weight them 
    var assignment = $("#Assignment").val();
    var group = $("#Group").val();
    var quizz = $("#Quizz").val();
    var exam = $("#Exam").val();
    var intex = $("#Intex").val();

    //Calcurate a final percentage
    var total = assignment * .5 + group * .1 + quizz * .1 + exam * .2 + intex * .1;
    var letterGrade = "";

    //Determine a final letter based on the final percentage
    if (total >= 94) {
        letterGrade = "A";
    }
    else if (total >= 90) {
        letterGrade = "A-";
    }
    else if (total >= 87) {
        letterGrade = "B+";
    }
    else if (total >= 84) {
        letterGrade = "B";
    }
    else if (total >= 80) {
        letterGrade = "B-";
    }
    else if (total >= 77) {
        letterGrade = "C+";
    }
    else if (total >= 74) {
        letterGrade = "C";
    }
    else if (total >= 70) {
        letterGrade = "C-";
    }
    else if (total >= 67) {
        letterGrade = "D+";
    }
    else if (total >= 64) {
        letterGrade = "D";
    }
    else if (total >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //Display the final grade after the final grade is calcurated
    var result = String(letterGrade) + " (" + String(total.toFixed(2)) + "%)";
    alert("Your final grade is " + result)
});