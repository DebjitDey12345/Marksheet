import React from 'react';
import './CSS/Style.css'

const Marksdetails = () => {
  const student = {
    name: 'Debjit Dey',
    rollNo: '12007896',
    school: 'Burdwan Municipal High School',
    exam: 'Secondary Examination',
    subjects: [
      { name: 'Bengali', fullMarks: 100, written: 90, oral: 10, total: 82, grade: 'A' },
      { name: 'English', fullMarks: 100, written: 85, oral: 10, total: 95, grade: 'A' },
      { name: 'Mathematics', fullMarks: 100, written: 95, oral: 5, total: 78, grade: 'A' },
      { name: 'Physical Science', fullMarks: 100, written: 88, oral: 10, total: 87, grade: 'A' },
      { name: 'Life Science', fullMarks: 100, written: 92, oral: 8, total: 86, grade: 'A' },
      { name: 'History', fullMarks: 100, written: 85, oral: 10, total: 95, grade: 'A' },
      { name: 'Geography', fullMarks: 100, written: 90, oral: 10, total: 92, grade: 'A' },
    ],
  };
   // Function to calculate percentage
   const calculatePercentage = () => {
    const totalMarks = student.subjects.reduce((acc, curr) => acc + curr.total, 0);
    const percentage = (totalMarks / (student.subjects.length * 100)) * 100;
    return percentage.toFixed(2); // Round to 2 decimal places
  };

  // Function to calculate division (assuming a simple 10-point GPA scale)
  const calculateDivision = () => {
    const percentage = calculatePercentage();
    if (percentage >= 80) {
      return 'Distinction';
    } else if (percentage >= 60) {
      return 'First Division';
    } else if (percentage >= 45) {
      return 'Second Division';
    } else {
      return 'Third Division';
    }
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center',backgroundColor:'blue' }}>West Bengal Board Of Secondary Education</h1>
      <h2 style={{ textAlign: 'center',backgroundColor:'green' }}>Secondary Examination</h2>
      <h3 style={{ textAlign: 'center' }}>{student.school}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div>
          <p><strong>Name: </strong>{student.name}</p>
          <p><strong>Roll No: </strong>{student.rollNo}</p>
        </div>
      </div>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Full Marks</th>
            <th>Written</th>
            <th>Oral</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {student.subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.fullMarks}</td>
              <td>{subject.written}</td>
              <td>{subject.oral}</td>
              <td>{subject.total}</td>
              <td>{subject.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'right',color:'red' }}>
        <p><strong>Total Marks: </strong>{student.subjects.reduce((acc, curr) => acc + curr.total, 0)}</p>
        <p><strong>Percentage: </strong>{calculatePercentage()}%</p>
        <p><strong>Division: </strong>{calculateDivision()}</p>
      </div>
    </div>
  );
};

export default Marksdetails;
