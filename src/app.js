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
    <div className="App">
      {step === 1 ? (
        <NameAgeForm onSubmit={handleNameAgeSubmit} />
      ) : (
        <>
          <h1>Symptom Checker</h1>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <SymptomForm onAddSymptom={addSymptom} />
          <SymptomList symptoms={symptoms} removeSymptom={removeSymptom} />
          <button onClick={handleSubmit}>Submit</button>
          {submitError && <p>Error: {submitError}</p>}
        </>
      )}
    </div>
  );
}

export default App;
