function gradingStudents(grades: number[]): number[] {
  return grades.map(grade => {
    const diff = 5 - (grade % 5);

    if (grade < 38) {
      return grade;
    }

    if (diff < 3) {
      return grade + diff;
    }

    return grade;
  });
}

function main () {
  const grades = gradingStudents([73, 67, 38, 33]);
  console.log(grades);
}

main();