import React from "react";
import PouchDB from 'pouchdb-browser';
import {Provider} from 'use-pouchdb';

const db= new PouchDB('local');
// let PouchDB = require("pouchdb")
// let db = new PouchDB("my_database");