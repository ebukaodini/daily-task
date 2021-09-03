// var PouchDB = require('pouchdb-browser');
import PouchDB from 'pouchdb-browser';

export const connect = () => {
  console.log('opening database...');
  return new PouchDB('dailytasks');
}

export const disconnect = (db) => {
  console.log('closing database...');
  db.close();
}