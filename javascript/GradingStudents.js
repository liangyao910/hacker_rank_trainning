// Grading Students
function gradingStudents(grades) {
    // Write your code here
    let new_grades = [];
    for (let i=0; i < grades.length; i++) {
        let next_num = 5*(parseInt(grades[i]/5)+1);
        if (next_num - grades[i] < 3 && grades[i] >= 38) {
            new_grades[i] = next_num;
        } else {
            new_grades[i] = grades[i];
        }
    }
    return new_grades;
}

gradingStudents([73, 67, 38, 33]);
