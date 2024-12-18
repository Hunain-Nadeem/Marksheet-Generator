let plus = document.querySelector("#plus")
let form = document.querySelector("#form")
let result =  document.querySelector("#result")

plus.addEventListener("click" ,()=>{
  let newlabel = document.createElement("label")
  newlabel.textContent = "subject" 
  newlabel.style.fontSize = "20px"

  let subnameinp = document.createElement("input")
  subnameinp.placeholder = "Subject Name"
   subnameinp.id = "subject2"

  let marks = document.createElement("input")
   marks.id = "marks2"
   marks.placeholder = "Marks"
   marks.type = "number"
   marks.min = "0"
   marks.max = "100"
 
   

   form.append(newlabel)
   form.append(subnameinp)
   form.append(marks)


})

let btn = document.querySelector("#btn")
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Initialize total marks
  let totalMarks = 0;
  let subjectCount = 0; // To count the number of subjects

  // Get all marks inputs
  const marksInputs = form.querySelectorAll('input[type="number"]');

  // Calculate total marks and count subjects
  marksInputs.forEach(input => {
      let markValue = parseInt(input.value) || 0; // Use 0 if input is empty
      totalMarks += markValue;
      if (markValue > 0) {
          subjectCount++; // Count only subjects with marks
      }
  });

  // Calculate maximum possible marks
  let maxMarks = subjectCount * 100; // Assuming each subject is out of 100

  // Calculate percentage
  let percentage = (totalMarks / maxMarks) * 100;

  // Display the result
  result.textContent = `Total Marks: ${subjectCount*100} / ${totalMarks}, Percentage: ${percentage.toFixed(2)}%`;
});