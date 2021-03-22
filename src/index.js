import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import FirebaseContext from './context/firebase';
import {FieldValue,firebase} from './lib/firebase' 

ReactDOM.render(
  <BrowserRouter>
  <FirebaseContext.Provider value={{firebase,FieldValue}}>
    <App />
    </FirebaseContext.Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

