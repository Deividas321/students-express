const express = require('express');
const app = express();
const port = 3001;

// Define the list of students
const students = [
  { name: 'Jonas', age: 99, status: 'vedes' },
  { name: 'Maryte', age: 25, status: 'netekejusi' },
  { name: 'Petras', age: 40, status: 'vedes' },
  { name: 'Ona', age: 30, status: 'netekejusi' },
];

// Route to list all students
app.get('/', (req, res) => {
    return res.send('Home page');
});
app.get('/students', (req, res) => {
  const studentNames = students.map(student => student.name).join(', ');
  res.send(`Mokosi ${students.length} studentai: ${studentNames}.`);
});

// Route to get a specific student by name
app.get('/students/:name', (req, res) => {
  const studentName = req.params.name.toLowerCase();
  const student = students.find(s => s.name.toLowerCase() === studentName);

  if (student) {
    res.send(`Studentas, vardu ${student.name} yra ${student.age} metu amziaus ir yra ${student.status}.`);
  } else {
    res.send(`Studento, vardu ${req.params.name} nera.`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App running on: http://localhost:${port}`);
});
