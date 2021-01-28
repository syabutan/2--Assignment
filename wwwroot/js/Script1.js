$('#submit').click(function () {

    //Take percentage for each grade category from input and weight them 
    var assignment = $("#Assignment").val();
    var group = $("#Group").val();
    var quizz = $("#Quizz").val();
    var exam = $("#Exam").val();
    var intex = $("#Intex").val();


    //I have C#'s validation, but it seems that it doesn't work, I added js validation
    //alert if the user doesn't enter a number between 0 and 100
    if (assignment < 0 || assignment > 100 || isNaN(assignment)) {
        $("#Assignment").focus();
        alert("Enter a number between 0 and 100");
    }
    else if (group < 0 || group > 100 || isNaN(group)) {
        $("#Group").focus();
        alert("Enter a number between 0 and 100");
    }
    else if (quizz < 0 || quizz > 100 || isNaN(quizz)) {
        $("#Quizz").focus();
        alert("Enter a number between 0 and 100");
    }
    else if (exam < 0 || exam > 100 || isNaN(exam)) {
        $("#Exam").focus();
        alert("Enter a number between 0 and 100");
    }
    else if (intex < 0 || intex > 100 || isNaN(intex)) {
        $("#Intex").focus();
        alert("Enter a number between 0 and 100");
    }
    else {



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
        $("#final").get(0).style.display = "block";
        var result = String(letterGrade) + " (" + String(total.toFixed(2)) + "%)";
        $("#letterGrade").get(0).innerHTML = result;
    }
});