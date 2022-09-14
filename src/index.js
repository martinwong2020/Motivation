import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import PouchDB from 'pouchdb-browser';
// // import {Provider} from 'use-pouchdb';


// const db = new PouchDB('mydb');
// let remoteCouch = false;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <section>
        <App />
    </section>
    
);

