import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './App-v1';

// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={5} className='test' 
    color="red" size={24}
    messages={['Terribale', 'Bad', 'Okay', 'Good', 'Amazing']}
    defaultRating={3}/> */}
  </React.StrictMode>
);

