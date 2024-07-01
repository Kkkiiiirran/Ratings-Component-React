import { useState } from 'react';
import './App.css';
import RatingForm from './RatingForm';
import Output from './Output';


function App() {
  const [submittedValue, setSubmittedValue] = useState(null)


  if (submittedValue===null) {
    return (
      <div>
        <RatingForm onSubmittedValue={setSubmittedValue}/>
      </div>
    );
  }
  else {
    return (
      <div>
        <Output submittedValue={submittedValue}/>
      </div>
    )
  }
};
export default App;
