import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';
import {config} from './config'

firebase.initializeApp(config);
let provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().onAuthStateChanged(function(user) {
  if(user){
    let items = firebase.database().ref(`users/${user.uid}/items`)
    ReactDOM.render(<App items={items} />, document.getElementById('root'));
    registerServiceWorker();
  }else{
    firebase.auth().signInWithRedirect(provider);
  }
})
