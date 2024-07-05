import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://us-west-2.aws.neurelo.com/rest/Doctors?take=3',
          {
            headers: {
              'X-API-KEY': ,
            },
          }
        );
        console.log('Data submitted successfully:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting data:', error);
      setSubmitError(error.message);
    }
  };
    fetchData();
  }, []);
 
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
