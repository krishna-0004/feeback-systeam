const questions = [
  {
    question: "Has the teacher been punctual and regular to the classes during the semester?",
    options: [
      { text: "Always on time", weight: 10 },    // A
      { text: "Most of the times", weight: 8 },  // B
      { text: "Sometimes", weight: 6 },         // C
      { text: "Never comes on time", weight: 4 } // D
    ]
  },
  {
    question: "Do you feel the teacher has followed the lesson plan till this date in the semester?",
    options: [
      { text: "Regularly", weight: 10 },    // A
      { text: "Frequently", weight: 8 },    // B
      { text: "Occasionally", weight: 6 },  // C
      { text: "Never", weight: 4 }         // D
    ]
  },
  {
    question: "Was the teacher always well prepared for the lecture?",
    options: [
      { text: "Always", weight: 10 },          // A
      { text: "Most of the times", weight: 8 }, // B
      { text: "Only a few times", weight: 6 },  // C
      { text: "Never", weight: 4 }            // D
    ]
  },
  {
    question: "How did the teacher explain the subject?",
    options: [
      { text: "Excellent", weight: 10 },  // A
      { text: "Good", weight: 8 },       // B
      { text: "Satisfactorily", weight: 6 }, // C
      { text: "Poor", weight: 4 }        // D
    ]
  },
  {
    question: "How much opportunity did the teacher give for questions and discussions?",
    options: [
      { text: "All the time", weight: 10 }, // A
      { text: "Occasionally", weight: 8 },  // B
      { text: "Rarely", weight: 6 },       // C
      { text: "Never", weight: 4 }        // D
    ]
  },
  {
    question: "How was the continuity maintained from class to class while teaching the subject?",
    options: [
      { text: "Excellent", weight: 10 },  // A
      { text: "Good", weight: 8 },       // B
      { text: "Satisfactorily", weight: 6 }, // C
      { text: "Poor", weight: 4 }        // D
    ]
  },
  {
    question: "Has the teacher motivated you to study the subject in depth?",
    options: [
      { text: "Highly", weight: 10 }, // A
      { text: "Enough", weight: 8 },  // B
      { text: "Rarely", weight: 6 },  // C
      { text: "Never", weight: 4 }    // D
    ]
  },
  {
    question: "How was the language clarity and communication of the teacher?",
    options: [
      { text: "Excellent", weight: 10 },  // A
      { text: "Good", weight: 8 },       // B
      { text: "Satisfactorily", weight: 6 }, // C
      { text: "Poor", weight: 4 }        // D
    ]
  },
  {
    question: "Comment on the teacher's control and command over the class.",
    options: [
      { text: "Maintains good discipline by his/her presence", weight: 10 }, // A
      { text: "Some order in the class", weight: 8 },  // B
      { text: "Frequently class is disordered", weight: 6 }, // C
      { text: "Class is always noisy & disordered", weight: 4 } // D
    ]
  },
  {
    question: "Has the teacher been helpful outside the classroom to clarify your doubts?",
    options: [
      { text: "Always", weight: 10 },         // A
      { text: "Most of the time", weight: 8 }, // B
      { text: "Only sometimes", weight: 6 },  // C
      { text: "Never", weight: 4 }           // D
    ]
  }
];

export default questions;
