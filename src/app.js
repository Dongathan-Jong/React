import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  return (
    <div>
      <h1>Neurelo Doctor Publisher</h1>
      <h2>Top 3 Doctors:</h2>
      <ul>
        {doctorData.map(doctor => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
